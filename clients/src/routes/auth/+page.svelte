<script lang="ts">
    import {createFormControl} from "$components/Form/FormUtils.ts";
    import {GET} from "$lib/ClientAPI.ts";
    import type {CreateTokenRequest, CreateTokenResponse} from "../../../../@types/requests/auth.ts";
    import type {UserMeResponse} from "../../../../@types/requests/users.ts";
    import {defineUserCredentials, defineUserProfile} from "$stores/user/utils.ts";
    import user from "$stores/user";
    import {goto} from "$app/navigation";
    import {getRoutes} from "$lib/Routes.ts";
    import Form from "$components/Form/Form.svelte";
    import FormField from "$components/Form/FormField.svelte";
    import FormButton from "$components/Form/FormButton.svelte";

    const control = createFormControl();

    async function callback () {
        control.unsetError("email");
        control.unsetError("password");

        const createTokenData : CreateTokenRequest = {
            email: control.readField("email"),
            password: control.readField("password")
        }

        if (!createTokenData.email) {
            control.setError("email", "Veuillez renseigner votre email");
            return;
        }
        if (!createTokenData.password) {
            control.setError("password", "Veuillez renseigner votre mot de passe");
            return;
        }

        control.unsetAll();

        try {
            const reqToken = GET('auth/create-token', createTokenData);
            const resToken : CreateTokenResponse = await reqToken.send();

            const reqMe = GET('users/me', {}).withToken(resToken.token)
            const resMe : UserMeResponse = await reqMe.send();

            await defineUserCredentials(user, resToken);
            await defineUserProfile(user, resMe)

            await goto(getRoutes().MATERIALS.path)
        } catch (e) {
            console.log(e)
            control.setError("email", "Email incorrect");
            control.setError("password", "Mot de passe incorrect");
        }
    }

</script>

<div class="page">
    <Form {control}>
        <FormField key="email" label="Email" placeholder="hello@gmail.com" />
        <FormField key="password" label="Mot de passe" type="password" placeholder="********" />
        <FormButton {callback} name="Se connecter" />
    </Form>
</div>

<style lang="scss">
    .page {
        @apply w-full h-full;
        @apply flex flex-col justify-center;
    }

    :global(.Form) {
      // center reduce width on desktop
      @apply md:mx-auto;
      @apply md:w-1/3;
    }
</style>
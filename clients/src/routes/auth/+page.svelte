<script>
    import FormInput from "../../components/form/FormInput.svelte";
    import Form from "../../components/form/Form.svelte";
    import {createFormControl} from "../../components/form/FormUtils.ts";
    import FormButton from "../../components/form/FormButton.svelte";

    const control = createFormControl();

    function callback () {
        control.setError("email", "Email invalide");
        console.log("bipped")
    }

</script>

<Form {control} let:data>
    <FormInput {data} key="email" name="Email" placeholder="hello@gmail.com" />
    <FormInput {data} key="password" name="Mot de passe" type="password" placeholder="********" />
    <FormButton {callback} name="Envoyer" />
</Form>

<style lang="scss">
    @import "../../../static/common.scss";

    :global(.page) {
        @apply w-full;
        @apply flex flex-col justify-center;
    }

    :global(.form-container) {
      // center reduce width on desktop
      @apply md:mx-auto;
      @apply md:w-1/3;

      // padding inside
      @apply px-6 py-12;
      @apply md:px-12 md:py-16;

      @apply glass;
    }


</style>
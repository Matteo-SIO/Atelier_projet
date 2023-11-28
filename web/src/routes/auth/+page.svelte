<script lang="ts">

import Field from "../../components/Field/Field.svelte";
import Form from "../../components/Form/Form.svelte";
import Button from "../../components/Button.svelte";

import * as authFeedback from "$lib/actions/authFeedback";
import FieldData from "$lib/utils/FieldData";
import {writable} from "svelte/store";
import {onMount} from "svelte";

let loaded = false;

let fields = writable({
    pseudo: new FieldData(),
    password: new FieldData()
});

onMount(() => {
    loaded = true;
})

</script>


{#if loaded}
    <Form class="auth-form">
        <div class="auth-form-header">
            <h2>Connectez-vous</h2>
            <p>Vous n'avez pas de compte ? <mark>Contactez un admin</mark></p>
        </div>



            <Field required autofocus placeholder="Pseudo" type='text' data={$fields.pseudo}></Field>
            <Field required placeholder="Mot de passe" type='password' data={$fields.password}></Field>


        <Button class="auth-button-submit button-submit" callback={authFeedback.callback.bind(null, fields)}>Se connecter</Button>
    </Form>
{/if}

<style rel="stylesheet" lang="scss">
  @import "../../../static/common.scss";

  :global(.auth-form) {
    // use 2/4 of the screen
    @apply w-1/4;
    @apply mx-auto;
    @apply mt-20;

    // define size of high
    @apply h-60;
  }

    :global(.auth-form-header) {
        // center
        @apply flex flex-col items-center;
    }

    :global(.auth-form-header h2) {
        @apply text-2xl;
        @apply mb-1;

        // beautiful font, big size, underlined
        @apply font-bold;
        @apply text-center;
        @apply underline;
    }

    :global(.auth-button-submit) {
      // big button centered
        @apply h-10 px-5 text-lg;

    }
</style>
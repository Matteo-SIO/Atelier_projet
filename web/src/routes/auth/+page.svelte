<script lang="ts">

import Field from "../../components/Field/Field.svelte";
import Form from "../../components/Form/Form.svelte";
import Button from "../../components/Button.svelte";
import FieldGroup from "../../components/Field/FieldGroup.svelte";

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
    <Form size={3} offset={4}>
        <h2>Connectez-vous</h2>
        <p>Vous n'avez pas de compte ? <mark>Contactez un admin</mark></p>

        <FieldGroup>
            <!--<FormLine gap={10}>-->
            <Field placeholder="Pseudo" type='text' data={$fields.pseudo}></Field>
            <Field placeholder="Mot de passe" type='password' data={$fields.password}></Field>
            <!--</FormLine>-->
        </FieldGroup>

        <Button class="button-submit" callback={authFeedback.callback.bind(null, fields)}>Se connecter</Button>
    </Form>
{/if}

<style rel="stylesheet" lang="scss">
  @import "../../../static/common.scss";
</style>
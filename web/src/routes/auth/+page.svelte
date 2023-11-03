<script lang="ts">

import Field from "../../components/Field/Field.svelte";
import Form from "../../components/Form/Form.svelte";
import Submit from "../../components/Button.svelte";
import FieldData from "../../components/Field/FieldData.ts";
import * as API from "./../../lib/API";
import FieldGroup from "../../components/Field/FieldGroup.svelte";

let fields = {
    pseudo: new FieldData(),
    password: new FieldData()
}

function callback () {
    console.log(fields);
    let canceled = false;

    fields.pseudo.setError(null);
    fields.password.setError(null);

    if (fields.pseudo.getValue() === null || fields.pseudo.getValue() === "") {
        fields.pseudo.setError("Le pseudo ne peut pas être vide");
        canceled = true;
    }
    if (fields.password.getValue() === null || fields.password.getValue() === "") {
        fields.password.setError("Le mot de passe ne peut pas être vide");
        canceled = true;
    }

    if (!canceled) {

        let data = {
            pseudo: fields.pseudo.getValue(),
            password: fields.password.getValue()
        }

        API.GET('auth/create-token', {
            query: {
                // TODO: replace email by pseudo
                email: data.pseudo,
                password: data.password
            }
        }).then((res : any) => {
            console.log(res);

            console.log(res.token)
            localStorage.setItem('token', res.token);
            //window.location.href = "/";

        }).catch((err) => {
            if (err.status === 400 || err.status === 401) {
                fields.pseudo.setError("Le pseudo est incorrect");
                fields.password.setError("Le mot de passe est incorrect");
            }
            fields = fields;
        })
    }


    fields = fields;
}

</script>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


<Form size={3} offset={4}>
    <h2>Connectez-vous</h2>
    <p>Vous n'avez pas de compte ? <mark>Contactez un admin</mark></p>

    <FieldGroup>
        <!--<FormLine gap={10}>-->
            <Field placeholder="Pseudo" type='text' data={fields.pseudo}></Field>
            <Field placeholder="Mot de passe" type='password' data={fields.password}></Field>
        <!--</FormLine>-->
    </FieldGroup>

    <Submit name="Se connecter" primary medium callback={callback}></Submit>
</Form>
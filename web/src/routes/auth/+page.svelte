<script lang="ts">

import Field from "../../components/Field.svelte";
import Form from "../../components/Form.svelte";
import Submit from "../../components/Submit.svelte";
import FieldData from "../../components/FieldData";
import * as API from "./../../lib/API";
import FormLine from "../../components/FormLine.svelte";
import FieldGroup from "../../components/FieldGroup.svelte";

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
                fields.pseudo.setError("Pseudo ou mot de passe incorrect");
                fields.password.setError("Pseudo ou mot de passe incorrect");
            }
            fields = fields;
        })
    }


    fields = fields;
}

</script>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


<Form size={4} offset={4}>
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
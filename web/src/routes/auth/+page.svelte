<script>

import Field from "../../components/Field.svelte";
import Form from "../../components/Form.svelte";
import Submit from "../../components/Submit.svelte";
import FieldData from "../../components/FieldData";

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

    fields = fields;
}

</script>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


<Form>
    <div>
        <h2>Connectez-vous</h2>
        <p>Vous n'avez pas de compte ? <mark>Contactez un admin</mark></p>
    </div>

    <Field placeholder="Pseudo" type='text' data={fields.pseudo}></Field>
    <Field placeholder="Mot de passe" type='password' data={fields.password}></Field>

    <Submit name="Se connecter" callback={callback}></Submit>
</Form>
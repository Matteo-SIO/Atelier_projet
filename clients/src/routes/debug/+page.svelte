<script lang="ts">

import {createFormControl} from "$components/Form/FormUtils.ts";
import Form from "$components/Form/Form.svelte";
import FormField from "$components/Form/FormField.svelte";
import FormButton from "$components/Form/FormButton.svelte";

let control = createFormControl();

function handle() {
    console.log(control._data);
}

</script>


<Form {control} simple={true}>
    <FormField key="email" label="Email" placeholder="Email" />
    <FormField key="password" label="Password" placeholder="Password" />
    <FormButton name="Suite" callback={() => handle()} />
</Form>


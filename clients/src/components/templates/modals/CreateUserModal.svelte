<script lang="ts">
import ModalClose from "$components/Modal/ModalClose.svelte";
import Modal from "$components/Modal/Modal.svelte";
import ModalTitle from "$components/Modal/ModalTitle.svelte";
import ModalButton from "$components/Modal/ModalButton.svelte";
import TabledForm from "$components/Form/Tabled/TabledForm.svelte";
import TabledInput from "$components/Form/Tabled/TabledInput.svelte";
import {createFormControl} from "$components/Form/FormUtils.ts";
import {Role} from "$stores/user";

export let isOpen = true;

export function closeModal () {
    isOpen = false;
    control.unsetAll();
}

export function openModal () {
    isOpen = true;
}

function createCallback () {
    console.log(control.readField("email"));
    console.log(control.readField("password"));
    closeModal();
}

const control = createFormControl();

const roles = ["ADMIN", "MANAGER", "EMPLOYEE"];

</script>

<Modal bind:isOpen>

    <svelte:fragment slot="close">
        <ModalClose callback={closeModal} />
    </svelte:fragment>
    <svelte:fragment slot="title">
        <ModalTitle>Créer un utilisateur</ModalTitle>
    </svelte:fragment>
    <svelte:fragment slot="body">
        <TabledForm {control} let:data id="debugList">
            <TabledInput {data} key="email" name="Email" placeholder="hello@gmail.com" />
            <TabledInput {data} key="password" name="Mot de passe" placeholder="abc" type="password" />

            <TabledInput {data} key="firstname" name="Prénom" placeholder="Jean" />
            <TabledInput {data} key="lastname" name="Nom" placeholder="Dupont" />

<!--            <TabledInput {data} key="role" name="Role" placeholder="abc" type="radio" choices={roles} />-->

        </TabledForm>
    </svelte:fragment>
    <svelte:fragment slot="footer">
        <ModalButton id="createButton" callback={createCallback}>Créer l'utilisateur</ModalButton>
    </svelte:fragment>

</Modal>


<style lang="scss">
  :global(#createButton) {
    @apply bg-blue-500 hover:bg-blue-600;
    @apply text-white;
  }
</style>
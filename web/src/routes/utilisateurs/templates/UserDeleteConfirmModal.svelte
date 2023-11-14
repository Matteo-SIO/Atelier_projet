<script lang="ts">
    import ModalHeader from "../../../components/Modal/ModalHeader.svelte";
    import Button from "../../../components/Button.svelte";
    import Modal from "../../../components/Modal/Modal.svelte";
    import ModalBody from "../../../components/Modal/ModalBody.svelte";
    import ModalFooter from "../../../components/Modal/ModalFooter.svelte";
    import * as API from "$lib/API.ts"
    import SessionStore from "$lib/stores/SessionStore.ts";
    import {get} from "svelte/store";
    import ErrorModal from "../../../components/templates/ModalError.svelte";

    let showErrorModal = false;

    export let showModal : boolean;
    export let userID : number;

    function deleteUser() {
        console.log(userID);

        API.DELETE(`users/${userID}`, {
            token: get(SessionStore).token
        }).then((res) => {
            showModal = false;
        }).catch((err) => {
            console.log(err);
            showModal = false;
            showErrorModal = true;
        });


    }

    function cancel() {
        showModal = false;
    }

</script>

{#if showModal}
    <Modal bind:show={showModal}>
        <ModalHeader>
            <h5 class="modal-title">Confirmation de suppression</h5>
            <button type="button" class="btn-close" aria-label="Close" on:click={() => showModal = false}></button>
        </ModalHeader>
        <ModalBody>
            <p>Êtes-vous sûr de supprimer l'utilisateur ?</p>
            <p>Cette opération est irréversible</p>
        </ModalBody>
        <ModalFooter>
            <Button classes="btn btn-danger" callback={cancel}>Non</Button>
            <Button classes="btn btn-primary" callback={deleteUser}>Oui</Button>
        </ModalFooter>
    </Modal>
{/if}

<ErrorModal bind:showModal={showErrorModal}>
    <p>Une erreur est survenue lors de la suppression de l'utilisateur</p>
    <p>Veuillez réessayer plus tard</p>
</ErrorModal>
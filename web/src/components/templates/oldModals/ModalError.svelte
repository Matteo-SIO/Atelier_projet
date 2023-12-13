<script lang="ts">
    import Modal from "../../oldModal/Modal.svelte";
    import ModalHeader from "../../oldModal/ModalHeader.svelte";
    import ModalFooter from "../../oldModal/ModalFooter.svelte";
    import Button from "../../Button.svelte";
    import ModalBody from "../../oldModal/ModalBody.svelte";

    export let showModal : boolean;
</script>

<Modal show={showModal}>
    <ModalHeader class="modal-header-error">
        <h3>Une erreur est survenue</h3>
    </ModalHeader>
    <ModalBody>
        <slot></slot>
    </ModalBody>
    <ModalFooter>
        <Button class="button-close" callback={() => {showModal = false;}}>Fermer</Button>
    </ModalFooter>
</Modal>
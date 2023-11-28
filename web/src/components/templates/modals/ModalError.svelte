<script lang="ts">
    import Modal from "../../Modal/Modal.svelte";
    import ModalHeader from "../../Modal/ModalHeader.svelte";
    import ModalFooter from "../../Modal/ModalFooter.svelte";
    import Button from "../../Button.svelte";
    import ModalBody from "../../Modal/ModalBody.svelte";

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
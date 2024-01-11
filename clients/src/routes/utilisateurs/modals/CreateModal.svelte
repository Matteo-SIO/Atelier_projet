<script lang="ts">
import ModalClose from "$components/Modal/ModalClose.svelte";
import ModalBodyText from "$components/Modal/ModalBodyText.svelte";
import Modal from "$components/Modal/Modal.svelte";
import ModalTitle from "$components/Modal/ModalTitle.svelte";
import ModalButton from "$components/Modal/ModalButton.svelte";

export let isOpen = true;

export function closeModal () {
    isOpen = false;
}

export function openModal () {
    isOpen = true;
}
</script>

<Modal {isOpen}>
    <svelte:fragment slot="close">
        <ModalClose callback={closeModal} />
    </svelte:fragment>
    <svelte:fragment slot="title">
        <ModalTitle>Créer un utilisateur</ModalTitle>
    </svelte:fragment>
    <svelte:fragment slot="body">
        <ModalBodyText>
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </ModalBodyText>
        <ModalBodyText>
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </ModalBodyText>
    </svelte:fragment>
    <svelte:fragment slot="footer">
        <ModalButton id="accept" callback={() => {}}>
            Accept
        </ModalButton>
        <ModalButton id="deny" callback={() => {}}>
            Deny
        </ModalButton>
    </svelte:fragment>
</Modal>

<style lang="scss">
    :global(#accept) {
      @apply bg-green-500 hover:bg-green-600;
      @apply text-white;
    }

    :global(#deny) {
      @apply bg-red-500 hover:bg-red-600;
      @apply text-white;
    }
</style>
<script lang="ts">

    import CreateUserModal from "$components/templates/modals/CreateUserModal.svelte";
    import UsersListing from "$components/templates/listings/UsersListing.svelte";

    let openModal: () => void;
    let data: any[] = [];
</script>


<CreateUserModal isOpen={false} bind:openModal />


<div class="page">
    <div class="listing-header">
        <button class="create-button" on:click={openModal}>
            Créer un utilisateur
        </button>
    </div>

    <UsersListing bind:data />

</div>




<style lang="scss">
    @import "../../../static/common.scss";

    .page {
      @apply h-full;
      @apply flex flex-col;
    }

    .listing-header {
      @apply flex justify-end;
      @apply px-3 md:px-4;
      @apply pb-5 md:pb-5;

      & > .create-button {
        @apply glass-white-2;
        @apply text-white;
        @apply rounded-2xl;
        @apply px-3 md:px-4;
        @apply py-2 md:py-3;
      }
    }
</style>
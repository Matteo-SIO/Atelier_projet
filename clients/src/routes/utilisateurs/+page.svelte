<script lang="ts">

    import Create from "./modals/CreateModal.svelte";
    import UsersListing from "$components/templates/UsersListing.svelte";

    let openModal: () => void;

</script>


<Create isOpen={false} bind:openModal />


<div class="page">
    <div class="listing-header">
        <button class="create-button" on:click={openModal}>
            Créer un utilisateur
        </button>
    </div>

    <div class="listing">
        <UsersListing />
    </div>
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

    :global(.listing) {
      // Glassmorphism effect
      // @apply glass-white;

      @apply px-3 md:px-4;
      @apply h-full overflow-y-scroll;

      // Custom scrollbar
      &::-webkit-scrollbar {
          @apply w-2;
      }
      &::-webkit-scrollbar-track {
          @apply bg-transparent;
      }
      &::-webkit-scrollbar-thumb {
          @apply bg-gray-300;
          @apply rounded-full;
      }

      // space between items
      & :global(> *) {
          @apply mb-3 md:mb-4;
      }
    }
</style>
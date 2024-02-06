<script lang="ts">
    export let isOpen = false;
    export let id = '';
</script>

{#if isOpen}
    <!-- Main modal -->
    <div tabindex="-1" aria-hidden="true" class="Modal" {id}>
        <div class="ModalWrapper">
            <!-- Modal content -->
            <div class="ModalContent">
                <!-- Modal header -->
                <div class="modal-header">
                    <slot name="title" />
                    <slot name="close" />
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <slot name="body" />
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
  @import '../static/common.scss';
    .Modal {
      @apply h-full max-h-full;

      // center the modal
      @apply overflow-y-auto overflow-x-hidden;
      @apply fixed top-0 right-0 left-0 z-50;
      @apply flex justify-center items-center md:inset-0;

      // blur the background
      @apply backdrop-filter backdrop-blur-sm;
      @apply bg-gray-900 bg-opacity-50;
    }

    .ModalWrapper {
      @apply relative p-4 w-full max-w-2xl max-h-full;

      .ModalContent {
        @apply relative rounded-lg shadow;

        /* background */
        @apply bg-gray-50/50;
        @apply backdrop-filter backdrop-blur-lg bg-opacity-60;
      }
    }

    /* Header */
    .modal-header {
      @apply p-4 md:p-8 md:py-6;
      @apply flex items-center;
      @apply border-b rounded-t;

      & > :global(.header-text) {
        @apply w-full;
      }

      & > :global(.close-button) {
        @apply w-2/12;
      }

    }

    /* Body */
    .modal-body {
      @apply p-4 md:p-8 md:py-6;
    }

    /* Footer */
    :global(.modal-footer) {
      @apply flex items-center;
      @apply p-4 md:p-8 md:py-6;
      @apply border-t border-gray-200 rounded-b;
    }
</style>
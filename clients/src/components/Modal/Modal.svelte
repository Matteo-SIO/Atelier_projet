<script lang="ts">
    export let isOpen = false;
</script>

{#if isOpen}
    <!-- Main modal -->
    <div tabindex="-1" aria-hidden="true" class="modal-container">
        <div class="modal">
            <!-- Modal content -->
            <div class="modal-content">
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
    .modal-container {
      @apply h-full max-h-full;

      // center the modal
      @apply overflow-y-auto overflow-x-hidden;
      @apply fixed top-0 right-0 left-0 z-50;
      @apply flex justify-center items-center md:inset-0;

      // blur the background
      @apply backdrop-filter backdrop-blur-sm;
      @apply bg-gray-900 bg-opacity-50;
    }

    .modal {
      @apply relative p-4 w-full max-w-2xl max-h-full;

      .modal-content {
        @apply relative bg-white rounded-lg shadow dark:bg-gray-700;
      }
    }

    /* Header */
    .modal-header {
      @apply flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600;
    }

    /* Body */
    .modal-body {
      @apply p-4 md:p-5;
    }

    /* Footer */
    :global(.modal-footer) {
      @apply flex items-center;
      @apply p-4 md:p-5 border-t border-gray-200 rounded-b;
      @apply justify-end;
      & > :global(*) {
        @apply ms-3;
      }
    }
</style>
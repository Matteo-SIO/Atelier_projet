<script lang="ts">
    //export let props;
import ModalClose from "$components/Modal/ModalClose.svelte";
</script>

<!-- Main modal -->
<div tabindex="-1" aria-hidden="true" class="modal-container">
    <div class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <!-- Modal header -->
            <div class="modal-header">
                <h3 class="header-text">
                    Terms of Service
                </h3>
                <ModalClose />
            </div>
            <!-- Modal body -->
            <div class="modal-body">
                <p class="body-text">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="body-text">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>

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

        /* Header */
        .modal-header {
          @apply flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600;
          .header-text {
            @apply text-xl font-semibold text-gray-900 dark:text-white;
          }
        }

        /* Body */
        .modal-body {
          @apply p-4 md:p-5 space-y-4;
          .body-text {
            @apply text-base leading-relaxed text-gray-500 dark:text-gray-400;
          }
        }

        /* Footer */
        .modal-footer {
          @apply flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600;
        }

      }

    }
</style>
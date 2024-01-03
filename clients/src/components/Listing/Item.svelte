<script lang="ts">

    import {FileEditSolid, TrashBinSolid} from "flowbite-svelte-icons";
</script>


<div class="item">
    <div class="item-header">
        <div class="title">
            <div class="tag">
                [Ordinateur]
            </div>
            MSI 32Go
        </div>
        <div class="admin-action">
            <button>
                <TrashBinSolid />
            </button>
            <button>
                <FileEditSolid />
            </button>
        </div>
    </div>
    <div class="item-content">
        <slot />
    </div>
</div>



<style lang="scss">
    .item {
      @apply w-full;
      @apply bg-amber-200;
      @apply h-16;
      @apply rounded;
    }

    .item-header {
        @apply flex items-center justify-between;
        @apply bg-amber-300;
        @apply h-10;
        @apply px-3;
        @apply rounded;

        & .admin-action > button {
          @apply p-1 ms-1;
          @apply bg-gray-900;
          @apply rounded;
          @apply text-gray-300;
        }

        & .title {
          // inline
          @apply flex;

          & .tag {
            @apply bg-gray-900;
            @apply text-gray-300;
            @apply rounded;
            @apply px-2;
            @apply py-1;
            @apply text-xs;
            @apply mr-2;
          }
        }
    }

    .item-content {
      @apply rounded;
      @apply px-3;
    }
</style>
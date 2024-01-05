<script lang="ts">
    import {FileEditSolid, TrashBinSolid} from "flowbite-svelte-icons";

    export let title : string|null = null;
    export let tag : string|null = null;

    export let onRemove = () => {
        console.log("remove");
    }
    export let onEdit = () => {
        console.log("edit");
    }
</script>


<div class="item">
    <div class="item-header">
        <div class="title">
            {#if tag}
                <div class="tag">{tag}</div>
            {/if}
            {#if title}
                <div class="text">{title}</div>
            {/if}
        </div>
        <div class="admin-action">
            <button on:click={onRemove}>
                <TrashBinSolid />
            </button>
            <button on:click={onEdit}>
                <FileEditSolid />
            </button>
        </div>
    </div>
    <div class="item-content">
        <div class="info-1">
            <slot name="block-1" />
        </div>
        <div class="info-2">
            <slot name="block-2" />
        </div>
        <div class="user-action">
            <slot name="block-3" />
        </div>
    </div>
</div>



<style lang="scss">
    .item {
      @apply w-full;
      @apply bg-amber-200;
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

      // inline
      @apply flex;
      @apply items-center;
      @apply justify-between;

      & > * {
        // @apply items-center;
        @apply md:w-1/4 w-1/3;

        @apply text-xs md:text-base;
      }
    }
</style>
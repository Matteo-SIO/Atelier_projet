<script lang="ts">
    import {FileEditSolid, TrashBinSolid} from "flowbite-svelte-icons";
    import type {Block} from "$types/listing";
    import InfoBlock from "$components/Listing/InfoBlock.svelte";
    import ButtonBlock from "$components/Listing/ButtonBlock.svelte";

    export let title : string|null = null;
    export let tag : string|null = null;

    export let blocks: Block[] = []

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


        {#each [1,2,3] as key}
            {@const block = blocks[key-1] }
            {#if block}
                <div class="info-{key}">
                    {#if block.type === 'info'}
                        <InfoBlock>
                            <svelte:fragment slot="title">{block.title}</svelte:fragment>
                            <svelte:fragment slot="content">
                                {block.text}
                            </svelte:fragment>
                        </InfoBlock>
                    {/if}
                    {#if block.type === 'button'}
                        <ButtonBlock disabled={block.disabled} onClick={block.onClick}>
                            <svelte:fragment slot="icon">
                                {#if block.icon}
                                    <svelte:component this={block.icon} />
                                {/if}
                            </svelte:fragment>
                            <svelte:fragment slot="text">{block.text}</svelte:fragment>
                        </ButtonBlock>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>
</div>



<style lang="scss">
    @import "../../../static/common.scss";

    .item {
      @apply w-full;
      @apply glass-white-1;
      @apply rounded;
    }

    .item-header {
        @apply flex items-center justify-between;
        @apply glass-white-2;
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
      @apply mx-3;

      // inline
      @apply flex;
      @apply items-center;
      @apply justify-between;

      & > * {
        // @apply items-center;
        @apply w-1/3 px-1 md:w-1/4 md:px-0;
        @apply text-xs md:text-base;
      }
    }
</style>
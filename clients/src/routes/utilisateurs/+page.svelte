<script lang="ts">


    import Item from "../../components/Listing/Item.svelte";
    import InfoBlock from "../../components/Listing/InfoBlock.svelte";


    const iter = [1,2,3,4,5,6,7,8,9,10];
</script>

<div class="page">

    {#each iter as i (i)}
        <Item title="bidule@gmail.com">
            <svelte:fragment slot="block-1">
                <InfoBlock>
                    <svelte:fragment slot="title">Role:</svelte:fragment>
                    <svelte:fragment slot="content">Manager</svelte:fragment>
                </InfoBlock>
            </svelte:fragment>

            <svelte:fragment slot="block-3">
                <InfoBlock>
                    <svelte:fragment slot="title">Registered since:</svelte:fragment>
                    <svelte:fragment slot="content">
                        <code>02/01/2024</code>
                    </svelte:fragment>
                </InfoBlock>
            </svelte:fragment>
        </Item>
    {/each}



</div>


<style lang="scss">
    @import "../../../static/common.scss";
    .page {
      // Glassmorphism effect
      @apply glass-white;
      @apply h-full overflow-y-scroll;
      @apply px-3 md:p-4;

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

      & :global(> *) {
        @apply mb-4;
      }
    }
</style>
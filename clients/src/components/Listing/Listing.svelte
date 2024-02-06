<script lang="ts">
export let fetcher: (page: number) => Promise<any[]>;

export let data: any[];

let currentPage = 0;
export let pageSize = 10;

async function doRequest () {
    try {
        const res = await fetcher(currentPage);
        data = [...data, ...res];
        if (res.length === pageSize) {
            currentPage++;
            await doRequest();
        }
    } catch (e) {
        console.error(e);
    }
}

// TODO: infinite scroll
doRequest();

</script>


<div class="listing">
    {#each data as row (row.id)}
        <slot name="item" {row} />
    {/each}
</div>


<style lang="scss">
  @import "../../../static/common.scss";

  :global(.listing) {
    // Glassmorphism effect
    // @apply glass-white;

    @apply px-1 md:px-4;
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
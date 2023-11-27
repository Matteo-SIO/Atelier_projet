<script lang="ts">
    export let current = 19;
    export let total = 32;
    let pages : number[] = [];

    function onChange (newest : number) {
        current = Math.max(1, Math.min(newest, total))
        recalc();
    }

    function recalc () {
        pages = [];
        for (let i = current-4; i <= current+4; i++) {
            if (i < 1) continue;
            if (i > total) break;
            pages = [...pages, i];
        }
    }

    $: recalc();
</script>

<div class="wrapper {$$props.class}">
    <div class="content">
        <div class="ps-button">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="ps-previous" on:click={() => onChange(current - 1)}>Previous</p>
        </div>
        <div class="ps-item-list">
            {#each pages as page}
                <p class="ps-item ps-item-default" class:ps-item-selected={current === page} on:click={() => onChange(page)}>{page}</p>
            {/each}
        </div>
        <div class="ps-button">
            <p class="ps-next" on:click={() => onChange(current + 1)}>Next</p>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</div>

<style lang="scss">
    .wrapper {
      @apply flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4;
    }

    .content {
      @apply lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200;
    }

    .ps-button {
      @apply flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer;
    }

    .ps-previous {
      @apply text-sm ml-3 font-medium leading-none;
    }

    .ps-next {
        @apply text-sm font-medium leading-none mr-3
    }

    .ps-item-list {
      @apply sm:flex hidden;
    }

    .ps-item {
      @apply text-sm font-medium leading-none cursor-pointer pt-3 mr-4 px-2;
    }

    .ps-item-default {
        @apply text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400;
    }

    .ps-item-selected {
        @apply text-indigo-700 border-t border-indigo-400;
    }
</style>
<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import Listing from "../../components/Listing/Listing.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <Header activeLabel="Matériel" />
    <Listing />
{/if}

<style lang="scss">
  @import "../../../static/common.scss";

  :global(.button-order) {
    @apply legacy-button;
    @apply bg-purple-500 hover:bg-purple-400 rounded-md border-none;
    @apply px-2 py-1;
  }

  :global(.panel-head-grid) {
    @apply grid grid-cols-3 gap-4;
  }

    :global(.button-create) {
        @apply legacy-button;
        @apply bg-green-500 hover:bg-green-400 rounded-md border-none;
        @apply px-2 py-1;
        @apply ml-auto;
    }

</style>
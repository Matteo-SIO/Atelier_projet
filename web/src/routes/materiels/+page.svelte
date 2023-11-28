<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import Listing from "../../components/Listing/Listing.svelte";
    import Page from "../../components/Page.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <div class="page">

    </div>

    <Page>
        <Header slot="header" activeLabel="Matériel" />
        <Listing slot="content" />
    </Page>


{/if}

<style lang="scss">
  @import "../../../static/common.scss";

  :global(.button-order) {
    @apply legacy-button;
    @apply bg-purple-500 hover:bg-purple-400 rounded-md border-none;
    @apply px-2 py-1;
  }


    :global(.button-create) {
        @apply legacy-button;
        @apply bg-green-500 hover:bg-green-400 rounded-md border-none;
        @apply px-2 py-1;
        @apply ml-auto;
    }

</style>
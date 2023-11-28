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
        <svelte:fragment slot="content">
            <Listing class="own-list" />
            <Listing class="available-list" />
            <Listing class="some" />

        </svelte:fragment>
    </Page>


{/if}

<style lang="scss">
    @import "../../../static/common.scss";

    :global(.own-list) {
      @apply list-red;
    }

    :global(.available-list) {
      @apply list-green;
    }

    :global(.some) {
      @apply list-blue;
    }



</style>
<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import Listing from "../../components/Listing/Listing.svelte";
    import Page from "../../components/Page.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

    let CAN_CREATE_MATERIAL = true;

    let modalCreateMaterial = !CAN_CREATE_MATERIAL ? null : () => {

    };

</script>


{#if loaded}
    <div class="page">

    </div>

    <Page>
        <Header slot="header" activeLabel="Matériel" />
        <svelte:fragment slot="content">
            <Listing class="own-list" title="Mes commandes" />
            <Listing class="available-list" title="Matériels disponibles" createModal={modalCreateMaterial} />

        </svelte:fragment>
    </Page>


{/if}

<style lang="scss">
    @import "../../../static/common.scss";

    :global(.own-list) {
      @apply list-green;
    }

    :global(.available-list) {
      @apply list-blue;
    }



</style>
<script>
import Header from "../components/Header/Header.svelte";
import Page from "../components/Page.svelte";

export let data;
</script>

<style lang="scss">
  @import "../../static/common.scss";
</style>

{#if data.loaded}
    <Page>
        <Header slot="header" activeLabel="Matériel" />
        <!-- TODO: change dynamically -->

        <svelte:fragment slot="content">
            <slot />
        </svelte:fragment>
    </Page>
{/if}

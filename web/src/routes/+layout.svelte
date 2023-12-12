<script>
import Header from "../components/Header/Header.svelte";
import Page from "../components/Page.svelte";
</script>


<Page>
    <Header slot="header" activeLabel="Matériel" />
    <!-- TODO: change dynamically -->

    <svelte:fragment slot="content">
        <slot />
    </svelte:fragment>
</Page>

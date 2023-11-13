<script lang="ts">

    import {onMount} from "svelte";
    import Header from "../components/Header/Header.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    });
</script>

{#if loaded}
    <Header />
{/if}
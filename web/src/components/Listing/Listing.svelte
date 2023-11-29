
<!-- List.svelte -->
<script lang="ts">
    import PageSelector from "./PageSelector.svelte";

    export let title = "Titre par défaut";
    export let createModal : null | Function = null;
</script>

<div class="list-container {$$props.class}">
    <div class="header">
        <p>{title}</p>
        {#if createModal}
            <button on:click={createModal}>Créer</button>
        {/if}
    </div>
    <div class="body">
        <slot></slot> <!-- TODO -->
        <br />A
        <br />A
        <br />A
        <br />A
    </div>
    <div class="footer">
        <PageSelector class="page-selector" current={1} total={32} />
    </div>
</div>

<style lang="scss">
  @import "../../../static/common.scss";

</style>
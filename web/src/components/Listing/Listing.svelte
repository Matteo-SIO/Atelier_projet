
<!-- List.svelte -->
<script lang="ts">
    import PageSelector from "./PageSelector.svelte";
    import Button from "../Button.svelte";

    export let title = "Titre par défaut";
    export let createModal : null | Function = null;
</script>

<div class="list-container {$$props.class}">
    <div class="header">

        <div class="header-create">
            <div class="header-title">{title}</div>
            <!--<button class="button-create" on:click={createModal}>Créer</button>-->
        </div>
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

<!-- List.svelte -->
<script>
    import PageSelector from "./PageSelector.svelte";

    export let title = "Liste";
</script>

<div class="list-container {$$props.class}">
    <div class="header">
        <p>Liste des chaussures portées par le méchant loup</p>
        <!-- TODO -->
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
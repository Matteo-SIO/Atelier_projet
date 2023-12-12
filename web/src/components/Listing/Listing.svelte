<script lang="ts">
    import PageSelector from "./PageSelector.svelte";
    export let path;
</script>

<div class="list-container {$$props.class}">
    <div class="header">

        <div class="header-create">
            <div class="header-title"> RIP</div>
            <!--{#if createModal != null}
                <Button class="button-create" on:click={createModal}>Créer</Button>
            {/if}-->
        </div>
    </div>
    <div class="body">
        <slot></slot>
    </div>
    <div class="footer">
        <PageSelector class="page-selector" current={1} total={32} />
    </div>
</div>

<style lang="scss">
  @import "../../../static/common.scss";

</style>
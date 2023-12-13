<script lang="ts">
    import PageSelector from "./PageSelector.svelte";
    import Button from "../Button.svelte";
    import type {ListingController} from "./ListingController.ts";
    import {ListingPermission} from "./ListingController.ts";

    export let data : ListingController;
</script>

<div class="list-container {$$props.class}">
    <div class="header">

        <div class="header-create">
            <div class="header-title"> RIP</div>
            <div class="header-actions">
                {#if data.hasPermission(ListingPermission.CREATE)}
                   <Button class="button-create" on:click={() => {}}>Créer</Button>
               {/if}
            </div>
        </div>
    </div>
    <div class="body">
        <slot name="table"></slot>
    </div>
    <div class="footer">
        <PageSelector class="page-selector" current={1} total={32} />
    </div>
</div>

<style lang="scss">
  @import "../../../static/common.scss";

</style>
<script lang="ts">
    import {buildStyle} from "$lib/utils/DataBuilder";

    export let gap;

    $: styleAsString = buildStyle({
        gap: `${gap}px`
    })

</script>

<div class="row" style={styleAsString}>
    <slot></slot>
</div>

<style>
    .row {
        display: flex;
        /*gap: 10px;*/

        /* center all items horizontally */
        justify-content: center;

    }
</style>
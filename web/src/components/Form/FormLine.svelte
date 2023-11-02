<!--
    block is a row
    each items is a column
-->

<script>
    import {buildStyle} from "$lib/DataBuilder.js";

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
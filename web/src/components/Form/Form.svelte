<script lang="ts">
    import {buildClass} from "$lib/utils/DataBuilder";

    export let offset = 0;
    export let size = 2;

    let classes = buildClass({
        ['form']: true,
        [`col-md-${size}`] : (size !== 0),
        [`offset-md-${offset}`] : (offset !== 0)
    });
</script>


<div class={classes} style="margin-top: 25vh;">
    <slot></slot>
</div>

<style>
    .form {
        text-align: center;
    }
</style>
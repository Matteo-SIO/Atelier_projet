<script>
    import {buildClass} from "$lib/utils/DataBuilder";

    export let classes = '';
    export let end = false;

    classes = buildClass({
        "text-end": end
    }, classes);
</script>

<td class={classes}>
    <slot></slot>
</td>
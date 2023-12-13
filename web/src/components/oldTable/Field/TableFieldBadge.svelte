<script>
    import {buildClass} from "$lib/utils/DataBuilder";

    export let classes = "bg-warning";
    export let end = false;

    classes = buildClass({
        "badge": true,
        "text-end": end
    }, classes);

</script>

<td>
    <span class={classes}>
        <slot></slot>
    </span>
</td>
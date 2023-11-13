<script>
    import {buildClass} from "$lib/utils/DataBuilder";

    export let classes = "bg-warning";

    classes = buildClass({
        "badge": true
    }, classes);

</script>

<td>
    <span class={classes}>
        <slot></slot>
    </span>
</td>
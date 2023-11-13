<script>
    import {buildClass} from "$lib/utils/DataBuilder.js";

    export let classes = "";

    classes = buildClass({
        "badge": true
    }, classes);

</script>

<td>
    <span class={classes}>
        <slot></slot>
    </span>
</td>
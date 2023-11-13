<script>
    import {buildClass} from "$lib/utils/DataBuilder";

    export let classes = "";

    classes = buildClass({

    }, classes)

</script>

<th class={classes}>
    <slot></slot>
</th>
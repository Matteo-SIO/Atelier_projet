<script>
    import {buildClass} from "$lib/utils/DataBuilder";
    import Button from "../../Button.svelte";

    export let classes = '';
    export let end = false;

    let currentClasses = buildClass({
        'text-end': end
    }, '')
</script>

<td class={currentClasses}>
    <Button classes={classes}>
        <slot></slot>
    </Button>
</td>
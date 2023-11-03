<script lang="ts">
    import {buildClass} from "$lib/utils/DataBuilder";

    export let callback = () => {}

    export let big = false;
    export let small = false;
    export let medium = false;
    export let primary = false;
    export let classes = '';

    classes = buildClass({
        'btn': true,
        'btn-lg': big,
        'btn-sm': small,
        'btn-md': medium,
        'btn-primary': primary
    }, classes)

</script>

<button class={classes} type="submit" on:click={callback}>
    <slot></slot>
</button>
<script lang="ts">
    import {buildClass} from "$lib/utils/DataBuilder";

    export let name = '';
    export let callback = () => {}

    export let big = false;
    export let small = false;
    export let medium = false;
    export let primary = false;

    let classes = buildClass({
        'btn': true,
        'btn-lg': big,
        'btn-sm': small,
        'btn-md': medium,
        'btn-primary': primary
    })

</script>

<div class="button">
    <button class={classes} type="submit" on:click={callback}>{name}</button>
</div>

<style>
    /* same height as input */
    .button {
        height: 1rem;
    }
</style>
<script>
    import {buildClass} from "$lib/DataBuilder";

    export let big = false;
    export let medium = false;
    export let small = false;

    $: classes = buildClass({
        'form-group': true,
        'form-group-lg': big,
        'form-group-sm': small,
        'form-group-md': medium,
    })
</script>

<div class="{classes}">
    <slot></slot>
</div>
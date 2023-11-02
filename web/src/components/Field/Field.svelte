<script>
    export let placeholder = '';
    export let required = true;
    export let data;
    export let type = 'text';
    function typeAction (node) {
        node.type = type;
    }

</script>

<div class="field">
    <input class="form-control" use:typeAction {placeholder} {required} bind:value={data.value} autofocus>
    {#if data.error}
        <div class="invalid-feedback">
            {data.error}
        </div>
    {/if}
</div>

<style>
    .field {
        margin-bottom: 1rem;
    }

    .invalid-feedback {
        display: block;
        color: red;
    }
</style>
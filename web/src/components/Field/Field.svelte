<script>
    export let placeholder = '';
    export let data;
    export let type = 'text';
    function typeAction (node) {
        node.type = type;
    }

</script>

<div class="field-wrapper">
    <input use:typeAction class="field {$$props.class}" bind:value={data.value} autofocus>
    {#if data.error}
        <div class="invalid-feedback">
            {data.error}
        </div>
    {/if}
</div>


<style lang="scss">
    .field-wrapper {
      @apply mb-4;
    }

    .invalid-feedback {
        display: block;
        color: red;
    }
</style>
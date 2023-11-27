<script>
    export let placeholder = '';
    export let data;
    export let required = true;
    export let autofocus = false;
    export let type = 'text';
    function typeAction (node) {
        node.type = type;
    }

</script>

<div class="field-wrapper">
    <input class="field-input {$$props.class}" use:typeAction bind:value={data.value} class:required class:autofocus class:filled={data.value}>
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

    .filled {
      background-color: (rgb(232, 240, 254)) !important;
      @apply p-1;
    }

    .invalid-feedback {
        display: block;
        color: red;
    }

    :global(.field-input) {
      display: block;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    :global(.field-input):focus {
      border-color: #007bff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
</style>
<script lang="ts">
    import type {Writable} from "svelte/store";
    import type {FormData} from "./FormUtils.ts";

    export let data: Writable<FormData>;
    export let key: string;
    export let name: string;

    export let type: string = 'text';
    export let placeholder: string = '';

    // Fix for svelte (can't bidirectional bind an input)
    function typeAction(node : HTMLInputElement) {
        node.type = type;
    }

    data.update((dataSync : FormData) => {
        if (!dataSync[key]) {
            dataSync[key] = {
                value: '',
                error: undefined
            }
        }
        return dataSync;
    })

    $: hasError = $data[key].error;

</script>

<div class="field">
    <label class="field-label" class:field-label-error={hasError} for={key}>{name}</label>
    <input class="field-input" class:field-input-error={hasError} id={key} {placeholder} bind:value={$data[key].value} use:typeAction />

    {#if $data[key].error}
        <p class='error'>
            <span class="error-span">Erreur: </span>
            <span class="error-span2">{$data[key].error}.</span>
        </p>
    {/if}
</div>

<style lang="scss">
    // Form in glassmorphism context

    .field {
      @apply mb-6;
    }

    .field-label {
      @apply block;
      @apply mb-1;

      // font
      @apply text-gray-300;
      @apply font-mono;
      @apply font-bold;
      @apply text-base;

    }

    .field-input {
      @apply block w-full p-2.5 rounded-lg;
      @apply bg-gray-50 border border-gray-300;
      @apply focus:ring-blue-500 focus:border-blue-500;
      @apply transition duration-150 ease-in-out;

      // font
      @apply text-gray-500;
      @apply md:text-sm;

      // Glassmorphism
      @apply backdrop-filter backdrop-blur-lg bg-opacity-60;

      // cancel glassmorphism on focus
      @apply focus:bg-opacity-100 focus:backdrop-filter-none;
    }

    .field-input-error {
        @apply border-red-500 border-2;
        @apply focus:ring-red-500 focus:border-red-500;
    }

    .error {
        @apply pt-1;
        @apply text-red-500;
        @apply text-sm;
        @apply font-mono;
        & > .error-span {
          @apply font-bold;
        }
    }
</style>
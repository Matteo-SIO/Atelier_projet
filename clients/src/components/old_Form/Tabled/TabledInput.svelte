<script lang="ts">
    import type {Writable} from "svelte/store";
    import type {FormData} from "../FormUtils.ts";

    export let data: Writable<FormData>;
    export let key: string;
    export let name: string;

    export let type: string = 'text';
    export let placeholder: string = '';
    export let choices: string[] = [];

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

<tr class="field-wrapper">
    <td class="label-column">
        {name}
    </td>
    <td class="field-column">

        {#if !choices?.length}
            <input class="field-input" class:field-input-error={hasError} id={key} {placeholder} bind:value={$data[key].value} use:typeAction />
        {:else}
            TODO
        {/if}


        {#if $data[key].error}
            <p class='error'>
                <span class="error-span">Erreur: </span>
                <span class="error-span2">{$data[key].error}.</span>
            </p>
        {/if}
    </td>
</tr>



<style lang="scss">
  @import "../../../../static/common";

  .field-wrapper {
    // grid
    @apply grid grid-cols-3;
    @apply items-center;
    @apply space-y-0.5;
  }

  .field-input {
    @apply block w-full p-2.5 rounded-lg;
    @apply bg-gray-50 border border-gray-300;
    @apply focus:ring-blue-500 focus:border-blue-500;
    @apply transition duration-150 ease-in-out;

    // font
    @apply text-gray-500;
    @apply md:text-sm;
  }

  .error {
    @apply pt-1;
    @apply text-red-500;
    @apply text-sm;
    @apply font-mono;
    @apply text-center;
    & > .error-span {
      @apply font-bold;
    }
  }

  .label-column {
    @apply col-span-1;
    // small on mobile
    @apply text-sm md:text-base;
  }

  .field-column {
    @apply col-span-2;
  }
</style>
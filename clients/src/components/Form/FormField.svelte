<script lang="ts">
    import type {FormControl} from "$components/Form/FormUtils.ts";
    import {getContext} from "svelte";

    export let key: string;
    export let label: string;
    export let value: string|null = null;
    export let type: string = 'text';
    export let placeholder: string = '';

    // Fix svelte bug with type attribute with binding
    function makeType(node: HTMLElement) {
        node.setAttribute('type', type);
    }

    let mod = getContext('simple') ? 'simple' : 'listed';
    let control: FormControl = getContext('control');
    let data = control._data;

    control?.registerField(key);
    let fieldData = $data[key];

</script>

<div class="FieldWrapper {mod}">
    <label class="FormFieldLabel {mod}">
        {label}
    </label>

    <input class="FieldInput {mod}" use:makeType name={key} bind:value={fieldData.value} placeholder={placeholder} />

    {#if $data[key].error}
        <p class='FieldError'>
            <span class="error-span">Erreur: </span>
            <span class="error-span2">{$data[key].error}.</span>
        </p>
    {/if}
</div>



<style lang="postcss">
    .FieldWrapper.listed {
        @apply grid grid-cols-4 gap-4;
        @apply items-center;
        @apply mb-4;

        & .FormFieldLabel {
            @apply col-span-1;
            @apply text-right;
            @apply text-gray-300;
            @apply font-bold;
            @apply text-base;
        }
        & .FieldInput {
            @apply col-span-3;
        }
    }

    .FieldWrapper.simple {
        @apply flex flex-col gap-1;
        @apply mb-6;

        & .FormFieldLabel {
            @apply text-gray-300;
            @apply font-mono;
            @apply font-bold;
            @apply text-base;
        }
    }

    .FieldInput {
        @apply block w-full p-2.5 rounded-lg;
        @apply bg-gray-50 border border-gray-300;
        @apply focus:ring-blue-500 focus:border-blue-500;
        @apply transition duration-150 ease-in-out;

        /* font */
        @apply text-gray-500;
        @apply md:text-sm;

        /* Glassmorphism */
        @apply backdrop-filter backdrop-blur-lg bg-opacity-60;

        /* cancel glassmorphism on focus */
        @apply focus:bg-opacity-100 focus:backdrop-filter-none;
    }

    .FieldError {
        @apply pt-1;
        @apply text-red-500;
        @apply text-sm;
        @apply font-mono;
        @apply text-center;
        & > .error-span {
            @apply font-bold;
        }

    }
</style>
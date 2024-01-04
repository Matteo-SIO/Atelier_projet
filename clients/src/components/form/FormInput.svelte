<script lang="ts">
    import {Helper, Input, type InputType, Label} from "flowbite-svelte";
    import type {Writable} from "svelte/store";
    import type {FormData} from "./FormUtils.ts";

    export let data: Writable<FormData>;
    export let key: string;
    export let name: string;

    export let type: InputType = 'text';
    export let placeholder: string = '';

    data.update((dataSync : FormData) => {
        if (!dataSync[key]) {
            dataSync[key] = {
                value: '',
                error: undefined
            }
        }
        return dataSync;
    })

</script>

<div class="mb-6">
    <Label for={key} color={$data[key].error ? 'red' : 'gray'} class='block mb-2'>{name}</Label>
    <Input id={key} color={$data[key].error ? 'red' : 'base'} placeholder="{placeholder}" bind:value={$data[key].value} {type} />

    {#if $data[key].error}
        <Helper class='mt-2' color='red'>
            <span class="font-medium">Erreur: </span> {$data[key].error}.
        </Helper>
    {/if}
</div>
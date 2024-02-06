<script lang="ts">
    import type {FormControl} from "$components/Form/FormUtils.ts";
    import {setContext} from "svelte";

    export let control: FormControl;
    export let simple: boolean = true;

    setContext("simple", simple);
    setContext("control", control);

</script>


<div class="Form" class:simple={simple} class:listed={!simple}>
    <slot />
</div>

<style lang="postcss">

</style>
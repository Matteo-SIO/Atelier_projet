<script lang="ts">
    import type {FormControl} from "../FormUtils.ts";
    export let control : FormControl;
    export let id : string = '';
</script>

<div class="form-container" {id}>
    <slot data={control._data}></slot>
</div>

<style lang="scss">
    :global(.form-container) {

    }
</style>
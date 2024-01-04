<script lang="ts">

    import type {FormControl} from "./FormUtils.ts";

    export let control : FormControl;

</script>

<div class="form-container">
    <slot data={control._data}></slot>
</div>

<style lang="scss">

</style>
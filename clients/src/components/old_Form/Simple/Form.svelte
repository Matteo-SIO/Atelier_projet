<script lang="ts">
    import type {FormControl} from "../FormUtils.ts";
    export let control : FormControl;
</script>

<div class="form-container">
    <slot data={control._data}></slot>
</div>

<style lang="scss">
    @import "../../../../static/common";

    .form-container {
      @apply glass-white-1;

      // padding inside
      @apply px-6 py-12;
      @apply md:px-12 md:py-14;
    }
</style>
<script lang="ts">

    import type {FormControl} from "./FormUtils.ts";

    export let control : FormControl;

</script>

<div class="form-container">
    <slot data={control._data}></slot>
</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .form-container {
      @apply glass;

      // padding inside
      @apply px-6 py-12;
      @apply md:px-12 md:py-14;
    }
</style>
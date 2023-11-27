<script lang="ts">

</script>


<div class="form-wrapper {$$props.class}">
    <slot class="form-content"></slot>
</div>

<style lang="scss">
    .form-wrapper {
      // center all the content
      @apply flex flex-col items-center;
      @apply bg-stone-50 shadow-md rounded;
      @apply border border-gray-200;
      @apply p-4;
    }
</style>
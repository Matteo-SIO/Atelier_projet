<script lang="ts">
    export let fixScroll: boolean|null = false;
</script>



<div class="vertical" class:fixScroll={fixScroll}>
    <slot></slot>
</div>



<style lang="scss">
  .vertical {
    @apply flex flex-row;
    @apply w-full;
    height: 100%;
  }

  .fixScroll {
    height: calc(100vh - 90px) !important;
    // bug fixer: anti-scroll
  }
</style>
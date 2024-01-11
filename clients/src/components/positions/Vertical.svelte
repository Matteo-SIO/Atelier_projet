<script lang="ts">


</script>



<div class="vertical">
    <slot></slot>
</div>



<style lang="scss">
  .vertical {
    @apply flex flex-row;
    @apply w-full;
    height: calc(100vh - 90px);
    // bug fixer: anti-scroll
  }
</style>
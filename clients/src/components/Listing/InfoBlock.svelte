<script lang="ts">

</script>

<div class="info-block">
    <div class="line1">
        <slot name="title" />
    </div>
    <div class="line2">
        <slot name="content" />
    </div>
</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .info-block {
      @apply my-2 rounded-lg;
      //@apply bg-gray-300;
      @apply glass-white-1;
      @apply text-center;
      @apply py-0.5;
      @apply h-12;

      // center y axis
      @apply flex flex-col justify-center;
    }
</style>
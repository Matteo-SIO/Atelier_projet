<script lang="ts">

</script>

<div class="info-block">
    <div class="line1">
        <slot name="title" />
    </div>
    <div class="line2">
        <code>
            <slot name="content" />
        </code>
    </div>
</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .info-block {
      @apply my-2 rounded-lg;
      @apply glass-white-1;
      @apply text-center;
      @apply h-14;

      // center y axis
      @apply flex flex-col justify-center;
    }

    .line1 {
      @apply text-xs md:text-base lg:text-lg;
      @apply underline;
    }

    .line2 {
      @apply text-xs md:text-sm lg:text-base;
    }
</style>
<div class="page {$$props.class}">
    <slot name="header" class="header"></slot>
    <div class="page-content">
        <slot name="content"></slot>
    </div>
</div>

<style lang="scss">
    @import '../../static/common.scss';

    :global(.slot-header) {
      @apply px-16;
    }

    .page-content {
      @apply px-16 py-4;
    }
</style>
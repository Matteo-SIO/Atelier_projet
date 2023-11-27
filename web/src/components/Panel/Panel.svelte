<div class="panel-container mt-5">
    <div class="card">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .panel-container {
        @apply pl-8 pr-8 pt-6;
    }
</style>
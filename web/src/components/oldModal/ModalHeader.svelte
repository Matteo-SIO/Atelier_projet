<div class="modal-header {$$props.class}">
    <slot></slot>
</div>

<style>
    .modal-header-error {
        @apply bg-red-500;
        @apply text-white;
    }

    .modal-header-success {
        @apply bg-green-500;
        @apply text-white;
    }

    .modal-header-warning {
        @apply bg-yellow-500;
        @apply text-white;
    }

    .modal-header-info {
        @apply bg-blue-500;
        @apply text-white;
    }
</style>
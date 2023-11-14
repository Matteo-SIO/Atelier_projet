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
</style>
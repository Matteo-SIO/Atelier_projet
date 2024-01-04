<script lang="ts">
    export let name: string;
    export let callback: () => void;
</script>

<button class="form-button" on:click={callback}>{name}</button>

<style lang="scss">
    .form-button {
        @apply w-full;
        @apply bg-blue-500;
        @apply text-white;
        @apply font-bold;
        @apply py-2;
        @apply px-4;
    }
</style>
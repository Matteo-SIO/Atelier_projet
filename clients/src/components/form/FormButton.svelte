<script lang="ts">
    export let name: string;
    export let callback: () => void;
</script>

<button class="form-button" on:click={callback}>{name}</button>

<style lang="scss">
    .form-button {
        @apply py-2 px-4;
        @apply mt-2 md:mt-4;

        @apply w-full;
        @apply bg-blue-600/80;
        @apply rounded;

        // font
        @apply text-white;
        @apply font-bold;

        // hover
        @apply hover:bg-blue-500;

        // active
        @apply active:bg-blue-600;
    }
</style>
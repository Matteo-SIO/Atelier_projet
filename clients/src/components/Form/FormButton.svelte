<script lang="ts">
    export let name: string;
    export let callback: () => void;
</script>


<button class="FormButton" on:click={callback}>{name}</button>

<style lang="postcss">
    .FormButton {
        /* Apparence: */
        @apply bg-blue-600/80;
        @apply rounded;
        @apply w-full;

        /* Sizes: */
        @apply py-2 px-4;
        @apply mt-2 md:mt-4;

        /* Font: */
        @apply text-white;
        @apply font-bold;

        /* Mouse events: */
        @apply hover:bg-blue-600;
        @apply active:bg-blue-600/60;
    }
</style>
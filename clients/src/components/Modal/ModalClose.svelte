<script lang="ts">
    import CloseSolid from "flowbite-svelte-icons/CloseSolid.svelte";

    export let callback: () => void;
</script>

<button type="button" class="button-close" on:click={callback}>
    <CloseSolid class="w-5 h-5" />
    <span class="sr-only">Close modal</span>
</button>

<style lang="scss">
  .button-close {
    @apply text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto;
    @apply inline-flex justify-center items-center;
  }
</style>
<script lang="ts">
    export let callback: () => void;
    export let id: string;
</script>

<button {id} type="button" class="modal-button" on:click={callback}>
    <slot />
</button>


<style lang="scss">
    .modal-button {
      @apply text-white bg-blue-700 hover:bg-blue-800;
      @apply focus:ring-4 focus:outline-none focus:ring-blue-300;
      @apply font-medium rounded-lg text-sm px-5 py-2.5 text-center;
    }
</style>
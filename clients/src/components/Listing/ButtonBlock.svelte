<script lang="ts">

export let onClick: () => void;
export let disabled: boolean = false;

</script>


<button class="button" on:click={onClick} class:disabled>
    <div class="icon">
        <slot name="icon" />
    </div>
    <div class="text">
        <slot name="text" />
    </div>
</button>


<style lang="scss">
  .button {
    @apply my-2 rounded-lg;
    @apply bg-blue-300;

    @apply flex flex-row items-center justify-center;
    @apply w-full h-full;
    @apply w-full h-12;

    @apply p-2;

    & .icon {
      @apply w-1/4 h-full;
      //@apply bg-red-200;
      @apply flex flex-col items-center justify-center;
    }

    & .text {
      @apply w-3/4 h-full;
      //@apply bg-green-200;
      @apply flex flex-col items-center justify-center;
    }
  }
  .disabled {
    @apply opacity-50;
  }
</style>
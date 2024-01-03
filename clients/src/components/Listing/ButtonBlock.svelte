<script lang="ts">

export let onClick: () => void;
export let disabled: boolean = false;

</script>

<div class="button-block" class:disabled>
    <button class="button" on:click={onClick}>
        <div class="icon">
            <slot name="icon" />
        </div>
        <div class="text">
            <slot name="text" />
        </div>
    </button>
</div>

<style lang="scss">
  .button-block {
    @apply my-2 rounded-lg;
    @apply bg-blue-300;

    & .button {
      // center all
        @apply flex flex-col;
        @apply items-center;
        @apply justify-center;
        @apply w-full h-full;
        @apply rounded-lg;
    }
  }
  .disabled {
    @apply opacity-50;
  }
</style>
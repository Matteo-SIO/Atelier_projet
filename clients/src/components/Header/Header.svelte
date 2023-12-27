<script lang="ts">
    export let mobile_sidebar_toggle : boolean;

    function toggle () {
        mobile_sidebar_toggle = !mobile_sidebar_toggle;
    }
</script>

<div class="header">
    <div class="control">
        <button on:click={toggle}>Open/Close</button>
    </div>
    <div class="title">
        <h2>Page title</h2>
    </div>
</div>

<style lang="scss">
    .header {
      @apply py-5;
      @apply bg-gray-400;

      & .control {
        // align to left
        @apply float-left;
      }

      & .title {
        // align to center
        @apply text-center;
        & h2 {
          //@apply text-2xl;
          @apply m-0;
        }
      }
    }
</style>
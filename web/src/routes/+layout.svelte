<script>
import Sidebar from "../components/Sidebar/Sidebar.svelte";

export let data;
</script>


<div class="page">
    <!-- Sidebar -->
    <div class="sidebar box">
        <Sidebar></Sidebar>
    </div>

    <div class="body box">
        <slot></slot>
    </div>
</div>

<style lang="scss">
  @import "../../static/common.scss";

  // responsive
  :global(html), :global(body) {
    @apply h-full;
  }

  .page {
    @apply flex flex-row;
    @apply w-full h-full;
  }

  .sidebar {
    @apply w-full md:w-1/4;
    @apply h-full;
    @apply bg-gray-900;

    // hide on mobile
    @apply hidden md:block;
  }

</style>
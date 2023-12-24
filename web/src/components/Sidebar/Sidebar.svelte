<script>
    import SidebarGroup from "./SidebarGroup.svelte";
</script>

<div class="sidebar">
    <SidebarGroup></SidebarGroup>
    <SidebarGroup></SidebarGroup>
    <SidebarGroup></SidebarGroup>
</div>


<style lang="scss">
  .sidebar {
    @apply w-full md:w-1/6;
    @apply h-full;
    @apply bg-gray-900;

    // hide on mobile
    @apply hidden lg:block;
  }
</style>
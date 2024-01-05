<script lang="ts">
    import SidebarTop from "$components/Sidebar/SidebarTop.svelte";
    import SidebarDown from "$components/Sidebar/SidebarDown.svelte";

    export let mobile_sidebar_toggle : boolean = false;
</script>

<div class="sidebar-container" class:mobile-active={mobile_sidebar_toggle}>
    <SidebarTop />

    <SidebarDown />
</div>

<style lang="scss">
  @import "../../../static/common.scss";

  .sidebar-container {
    @apply m-4 mt-0;
    @apply p-5 md:p-3;
    @apply w-80;

    // Hide on mobile
    @apply hidden;

    // Show on desktop (tips: flex cancel hidden)
    @apply md:flex md:flex-col md:justify-between;
    // space-between top and down

    // Glassmorphism effect
    @apply glass glass-border;
  }

  .mobile-active {
    @apply block;
    @apply w-full;
    @apply flex flex-col justify-between;
  }
</style>
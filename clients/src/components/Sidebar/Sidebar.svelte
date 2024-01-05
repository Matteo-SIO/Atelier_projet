<script lang="ts">
    import SidebarList from "$components/Sidebar/SidebarTop.svelte";

    export let mobile_sidebar_toggle : boolean = false;
</script>

<div class="sidebar-container" class:mobile-active={mobile_sidebar_toggle}>
    <SidebarList />
</div>

<style lang="scss">
  @import "../../../static/common.scss";

  :global(.sidebar-container) {
    @apply m-4 mt-0;
    @apply hidden md:block;
    @apply md:w-80;
  }

  :global(.mobile-active) {
    @apply block;
    @apply w-full;
  }
</style>
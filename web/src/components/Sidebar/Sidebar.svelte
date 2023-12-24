<script lang="ts">
    import SidebarGroup from "./SidebarGroup.svelte";
    export let control: boolean;
</script>

<div class="base-sidebar" class:force-sidebar={control}>
    <SidebarGroup></SidebarGroup>
    <SidebarGroup></SidebarGroup>
    <SidebarGroup></SidebarGroup>
</div>


<style lang="scss">
  // desktop sidebar
  .base-sidebar {
    @apply w-full md:w-1/6;
    @apply h-full;
    @apply bg-gray-900;

    // hide on mobile
    @apply hidden lg:block;
  }

  // mobile sidebar
  .force-sidebar {
    @apply w-full w-2/3;
    @apply block;
  }
</style>
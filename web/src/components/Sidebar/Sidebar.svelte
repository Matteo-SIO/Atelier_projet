<script>
    import SidebarGroup from "./SidebarGroup.svelte";
</script>

<div class="list-group">
    <SidebarGroup></SidebarGroup>
    <SidebarGroup></SidebarGroup>
    <SidebarGroup></SidebarGroup>
</div>


<style lang="scss">
    .list-group > :global(*) {
        @apply py-2;
    }
</style>
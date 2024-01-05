<script lang="ts">
    import { page } from '$app/stores';
    import {Sidebar, SidebarGroup, SidebarDropdownWrapper, SidebarWrapper} from 'flowbite-svelte';
    import {getSidebarContent, type SidebarGroupType} from "$components/Sidebar/Sidebar.ts";
    import SidebarItems from "$components/Sidebar/SidebarItems.svelte";

    export let mobile_sidebar_toggle : boolean = false;

    $: mobileActive = (mobile_sidebar_toggle) ? 'mobile-active' : '';
    $: activeUrl = $page.url.pathname;

    const sidebarContent = getSidebarContent();

    function isActive (group: SidebarGroupType) {
        for (let item of group.content) {
            if (activeUrl === item.route.path) {
                return true;
            }
        }
        return false;
    }

</script>

<Sidebar {activeUrl} class="sidebar-container {mobileActive}">
    <SidebarWrapper class="sidebar-wp {mobileActive}">

        {#each sidebarContent.groups as group}
            <SidebarGroup class="sidebar-group">
                <SidebarDropdownWrapper class="group-button" label={group.display} isOpen={isActive(group)}>
                    <svelte:fragment slot="icon">
                        {#if group.icon}
                            <svelte:component this={group.icon} />
                        {/if}
                    </svelte:fragment>
                    <SidebarItems content={group.content} />
                </SidebarDropdownWrapper>
            </SidebarGroup>
        {/each}

        <SidebarItems content={sidebarContent.links} />
    </SidebarWrapper>
</Sidebar>

<style lang="scss">
  @import "../../../static/common.scss";

  :global(.sidebar-wp) {
    @apply pb-5;
    @apply hidden;
    @apply md:block;
    @apply md:w-64;
    @apply h-full;

    // Glassmorphism effect
    @apply glass glass-border;
  }

  :global(.sidebar-container) {
    @apply m-5;
  }

  :global(.mobile-active) {
    @apply block;
    @apply w-full;
  }

  :global(.sidebar-item) {
    @apply w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white;
  }

  :global(.sidebar-group) {
    @apply space-y-0.5;
    @apply glass;
    @apply my-2;
  }

  :global(.group-button) {
    @apply glass;
    @apply px-3;
  }
</style>
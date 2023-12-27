<script lang="ts">
    import { page } from '$app/stores';
    import {Sidebar, SidebarGroup, SidebarWrapper} from 'flowbite-svelte';
    import Materials from './Materials.svelte';
    import Users from "./Users.svelte";

    enum Group {
        Materials = '/materiels',
        Users = '/users',
    }

    let activeUrl : string = '';
    let currentActive : Group|null = null;

    $: {
        activeUrl = $page.url.pathname;
        if (activeUrl && activeUrl.startsWith(Group.Materials)) {
            currentActive = Group.Materials;
        } else if (activeUrl && activeUrl.startsWith(Group.Users)) {
            currentActive = Group.Users;
        }
    }
</script>

<Sidebar {activeUrl} class="sidebar">
    <SidebarWrapper class="sidebar">
        <SidebarGroup class="space-y-0.5">
            <Materials isOpen={currentActive === Group.Materials} />
            <Users isOpen={currentActive === Group.Users} />
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>

<style lang="scss">
    :global(.sidebar) {
        @apply bg-gray-300;
        @apply h-full;
    }

    :global(.sidebar-item) {
        @apply w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white;
    }

    :global(.sidebar-icon) {
        @apply text-gray-500 dark:text-gray-400;
    }
</style>
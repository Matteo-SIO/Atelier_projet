<script>
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
    $: activeUrl = $page.url.pathname;
</script>

<Sidebar {activeUrl}>
    <SidebarWrapper>
        <SidebarGroup>
            <SidebarItem label="Dashboard" {spanClass}>
                <svelte:fragment slot="icon">
                    <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Kanban" {spanClass}>
                <svelte:fragment slot="icon">
                    <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                    <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Inbox" {spanClass}>
                <svelte:fragment slot="icon">
                    <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                    <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sidebar" href="/docs/components/sidebar" {spanClass}>
                <svelte:fragment slot="icon">
                    <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign In" {spanClass}>
                <svelte:fragment slot="icon">
                    <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign Up" {spanClass}>
                <svelte:fragment slot="icon">
                    <FileEditSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>
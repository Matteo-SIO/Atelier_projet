<script lang="ts">
    import {SidebarItem} from "flowbite-svelte";
    import user, {Role} from "$stores/user/index.js";
    import type {SidebarLinkType} from "$components/Sidebar/Sidebar.ts";
    export let content: SidebarLinkType[];
</script>

{#each content as link}
    {#if ($user?.profile?.role ?? Role.GUEST) >= link.route.role}
        <SidebarItem label={link.display} class="sub" href={link.route.path}>
            <svelte:fragment slot="icon">
                {#if link.icon}
                    <svelte:component this={link.icon} />
                {/if}
            </svelte:fragment>
        </SidebarItem>
    {/if}
{/each}
<script>
    import {CalendarMonthSolid, ListSolid, PlusSolid, EyeSolid} from "flowbite-svelte-icons";
    import {SidebarItem, SidebarDropdownWrapper} from "flowbite-svelte";
    export let isOpen;
</script>

<SidebarDropdownWrapper label="Matériels" {isOpen}>
    <svelte:fragment slot="icon">
        <ListSolid class="sidebar-item" />
    </svelte:fragment>

    <SidebarItem label="Liste des matériel" class="sub">
        <svelte:fragment slot="icon">
            <PlusSolid class="sidebar-item" />
        </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Créer un matériel" class="sub">
        <svelte:fragment slot="icon">
            <EyeSolid class="sidebar-item" />
        </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Réserver un matériel" class="sub">
        <svelte:fragment slot="icon">
            <CalendarMonthSolid class="sidebar-item" />
        </svelte:fragment>
    </SidebarItem>
</SidebarDropdownWrapper>


<style lang="scss">
    :global(.sub) {
        @apply ps-6;
    }
</style>
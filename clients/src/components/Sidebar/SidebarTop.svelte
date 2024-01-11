<script lang="ts">
    import SidebarItems from "$components/Sidebar/SidebarLinks.svelte";
    import {page} from "$app/stores";
    import {getSidebarContent} from "$components/Sidebar/Sidebar.ts";
    import user from "$stores/user";
    import type {SidebarGroupType} from "$types/sidebar";

    $: activeUrl = $page.url.pathname;

    const sidebarContent = getSidebarContent();

    function meta (group: SidebarGroupType) {
        let meta = {active: false, display: false};
        for (let item of group.content) {
            if (activeUrl === item.route.path) {
                meta.active = true;
            }
            if (item.route.role <= ($user.profile?.role as number)) {
                meta.display = true;
            }
        }
        return meta;
    }

</script>

<div class="sidebar-list">
    {#each sidebarContent.groups as group}
        {#if meta(group).display}
            <div class="group">
                <button class="group-head">
                    <div class="head-icon">
                        {#if group.icon}
                            <svelte:component this={group.icon} />
                        {/if}
                    </div>
                    <div class="head-title">
                        {group.display}
                    </div>
                </button>

                <SidebarItems content={group.content} />
            </div>
        {/if}
    {/each}
    <SidebarItems content={sidebarContent.links} />
</div>

<style lang="scss">
  @import "../../../static/common.scss";

  :global(.sidebar-list) {
    @apply w-full;
  }

  :global(.group) {
    @apply mb-5;
    @apply glass-white-2;

    :global(.group-head) {
      @apply flex flex-row items-center;
      @apply p-2 w-full;

      //@apply glass-2;
      @apply glass-white-2;

      :global(.head-icon) {
        @apply w-10;
        @apply flex justify-center;
      }

      :global(.head-title) {
        @apply text-lg font-bold;
      }




    }

  }



</style>
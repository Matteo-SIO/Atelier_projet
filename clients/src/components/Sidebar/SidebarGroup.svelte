<script lang="ts">
    import user, {Role} from "$stores/user/index.js";
    import type {SidebarLinkType} from "$components/Sidebar/Sidebar.ts";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    export let content: SidebarLinkType[];

    function navigate (link: SidebarLinkType) {
        goto(link.route.path);
    }
</script>

<div class="links">
    {#each content as link}
        {#if ($user?.profile?.role ?? Role.GUEST) >= link.route.role}
            <button class="link" class:active={$page.url.pathname === link.route.path} on:click={() => navigate(link)}>
                <div class="link-icon">
                    {#if link.icon}
                        <svelte:component this={link.icon} />
                    {/if}
                </div>
                <div class="link-body">
                    {link.display}
                </div>
            </button>
        {/if}
    {/each}
</div>


<style lang="scss">
  @import "../../../static/common.scss";

  .links {
    @apply w-full;

    .link {
      @apply flex;
      @apply p-2 my-1;
      @apply w-full;

      @apply border-b border-gray-300;
      &:last-child {
        @apply border-none;
      }

      .link-icon {
        @apply w-10;
        @apply flex justify-center;
      }

      // Hover
      //&:hover {
      //  @apply glass-2;
      //  @apply rounded-md;
      //}

      // Active
      &:focus, .active {
        @apply glass-2;
        @apply rounded-md;
      }

    }
  }

  .active {
    @apply glass-2;
    @apply rounded-md;
  }
</style>
<script lang="ts">
import "../app.pcss";
import Header from "../components/Header/Header.svelte";
import {goto} from "$app/navigation";
import Vertical from "../components/positions/Vertical.svelte";
import Horizontal from "../components/positions/Horizontal.svelte";
import Sidebar from "$components/Sidebar/Sidebar.svelte";
import user from "$stores/user";
import {getRoutes} from "$lib/Routes.ts";
import {page} from "$app/stores";

export let data;
export let mobile_sidebar_toggle = false;

// TODO: condition by data
if (data.redirect) {
    goto(data.redirect);
}

const routes = getRoutes();

$: isLogged = $user.profile;
$: isAuthPage = $page.url.pathname === routes.AUTH.path;

</script>


<Horizontal>
    {#if isLogged && !isAuthPage}
        <Header bind:mobile_sidebar_toggle></Header>
    {/if}
    <Vertical fixScroll={isLogged && !isAuthPage}>
        {#if isLogged && !isAuthPage}
            <Sidebar bind:mobile_sidebar_toggle></Sidebar>
        {/if}
        {#if !mobile_sidebar_toggle}
            <div class="layout">
                {#if isLogged || isAuthPage}
                    <slot />
                {/if}
            </div>
        {/if}
    </Vertical>
</Horizontal>




<style lang="scss">
  @import "../../static/common.scss";

  // responsive
  :global(html), :global(body) {
    @apply h-full w-full;
    @apply p-0 m-0 md:px-8;
    //@apply md:p-2;
    word-wrap: break-word;

    @apply from-red-500 to-blue-500;
    @apply md:bg-gradient-to-tr bg-gradient-to-b;

    //@apply from-red-900;
    //@apply via-cyan-900 via-50%;
    //@apply to-slate-900;
    //@apply md:bg-gradient-to-tr bg-gradient-to-b;

    // diagonal gradient background
  }

  .layout {
    @apply w-full;
    @apply m-4 mt-0;
  }

</style>
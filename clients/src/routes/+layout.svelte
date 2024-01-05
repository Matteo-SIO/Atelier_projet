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

$: isLogged = $user.profile && $page.url.pathname  !== routes.AUTH.path;

</script>

<Horizontal>
    {#if isLogged}
        <Header bind:mobile_sidebar_toggle></Header>
    {/if}
    <Vertical>
        {#if isLogged}
            <Sidebar {mobile_sidebar_toggle}></Sidebar>
        {/if}
        {#if !mobile_sidebar_toggle}
            <div class="layout">
                <slot></slot>
            </div>
        {/if}
    </Vertical>
</Horizontal>

<style lang="scss">
  @import "../../static/common.scss";

  // responsive
  :global(html), :global(body) {
    @apply h-full w-full;
    @apply p-0 m-0;
    @apply md:p-2;
    word-wrap: break-word;

    @apply from-red-500 to-blue-500;
    @apply md:bg-gradient-to-r bg-gradient-to-b;
  }

  .layout {
    @apply w-full;
    @apply m-4 mt-0;
  }

</style>
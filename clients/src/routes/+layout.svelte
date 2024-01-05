<script>
import "../app.pcss";
import Header from "../components/Header/Header.svelte";
import {goto} from "$app/navigation";
import Sidebar from "../components/Sidebar/Sidebar.svelte";
import Vertical from "../components/positions/Vertical.svelte";
import Horizontal from "../components/positions/Horizontal.svelte";

export let data;
export let mobile_sidebar_toggle = false;

// TODO: condition by data
if (data.redirect) {
    goto(data.redirect);
}

const page = data.redirect ?? window.location.pathname;
let restreintMod = false;
if (page.includes("/auth")) {
    restreintMod = true;
}

</script>

<Horizontal>
    {#if !restreintMod}
        <Header bind:mobile_sidebar_toggle></Header>
    {/if}
    <Vertical>
        {#if !restreintMod}
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
    word-wrap: break-word;

    @apply from-red-500 to-blue-500;
    @apply md:bg-gradient-to-r bg-gradient-to-b;
  }

  .layout {
    @apply w-full;
    @apply p-3 md:p-6 md:px-24;
  }

</style>
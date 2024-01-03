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
goto('/utilisateurs');

</script>

<Horizontal>
    <Header bind:mobile_sidebar_toggle></Header>
        <Vertical>
            <Sidebar {mobile_sidebar_toggle}></Sidebar>
            {#if !mobile_sidebar_toggle}
                <div class="page">
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
  }

  .page {
    @apply w-full;
    @apply p-3 md:p-6 md:px-24;
  }

</style>
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
goto('/materiels');

</script>

<Horizontal>
    <Header bind:mobile_sidebar_toggle></Header>
    <Vertical>
        <Sidebar></Sidebar>
        {#if !mobile_sidebar_toggle}
            <slot></slot>
        {/if}
    </Vertical>
</Horizontal>

<style lang="scss">
  @import "../../static/common.scss";

  // responsive
  :global(html), :global(body) {
    @apply h-full;
    @apply p-0 m-0;
  }

</style>
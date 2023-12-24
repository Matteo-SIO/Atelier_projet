<script>
import Sidebar from "../components/Sidebar/Sidebar.svelte";
import Header from "../components/Header/Header.svelte";
import {goto} from "$app/navigation";

export let data;
export let sidebar_toggle = false;

// TODO: condition by data
goto('/materiels');

</script>


<div class="horizontal">
    <Header bind:control={sidebar_toggle}></Header>

    <div class="vertical">
        <Sidebar control={sidebar_toggle}></Sidebar>

        {#if !sidebar_toggle}
            <div class="body box">
                <slot></slot>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
  @import "../../static/common.scss";

  // responsive
  :global(html), :global(body) {
    @apply h-full;
    @apply p-0 m-0;
  }

  .vertical {
    @apply flex flex-row;
    @apply w-full h-full;
  }

  .horizontal {
    @apply flex flex-col;
    @apply w-full h-full;
  }

</style>
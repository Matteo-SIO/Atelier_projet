<script>
import Sidebar from "../components/Sidebar/Sidebar.svelte";
import Header from "../components/Header/Header.svelte";

export let data;
export let sidebar_toggle = false;

</script>


<div class="horizontal">
    <Header bind:control={sidebar_toggle}></Header>

    <div class="vertical">
        <Sidebar control={sidebar_toggle}></Sidebar>

        <div class="body box">
            <slot></slot>
        </div>
    </div>
</div>

<style lang="scss">
  @import "../../static/common.scss";

  // responsive
  :global(html), :global(body) {
    @apply h-full;
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
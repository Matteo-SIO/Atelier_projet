<script>
import Sidebar from "../components/Sidebar/Sidebar.svelte";
import Header from "../components/Header/Header.svelte";

export let data;
</script>


<div class="horizontal">
    <Header></Header>

    <div class="vertical">
        <Sidebar></Sidebar>

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
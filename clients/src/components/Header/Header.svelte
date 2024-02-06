<script lang="ts">

    import BarsSolid from "flowbite-svelte-icons/BarsSolid.svelte";
    export let mobile_sidebar_toggle : boolean;

    function toggle () {
        mobile_sidebar_toggle = !mobile_sidebar_toggle;
    }
</script>

<div class="header">
    <div class="sidebar_control">
        <button on:click={toggle}>
            <BarsSolid></BarsSolid>
        </button>
    </div>
    <div class="title">
        <p>Gestionnaire de stock</p>
    </div>
</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .header {
      @apply bg-gray-600;
      @apply p-2 m-4 mb-6;
      @apply flex items-center;

      // Glassmorphism effect
      @apply glass;
    }

    .sidebar_control {
      @apply items-center;
      @apply justify-between;
      @apply block md:hidden; // show only on mobile
      @apply text-2xl;
      @apply text-white;
    }

    .title {
      @apply text-lg md:text-2xl;
      @apply items-center;
      @apply justify-between;
      @apply w-full;
      @apply text-center;
      @apply text-white;
    }
</style>
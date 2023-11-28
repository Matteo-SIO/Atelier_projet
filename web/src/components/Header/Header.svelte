<script>
import sessionStore from "$lib/stores/SessionStore";
import * as headerFeedback from "$lib/actions/headerFeedback";
import Button from "../Button.svelte";

const navItems = [
    { label: "Matériel", href: "/materiels" },
    { label: "Utilisateurs", href: "/utilisateurs" },
    { label: "Incidents", href: "/incidents" },
];

export let activeLabel = "Matériel";

</script>

{#if $sessionStore.user}
    <nav class="navbar-wrapper slot-{$$props.slot}">
        <ul class="navbar-links">
            {#each navItems as navItem}
                <li><a href={navItem.href}>{navItem.label}</a></li>
            {/each}
        </ul>

        <div class="right-content">
            <b>Bonjour, {$sessionStore.user.firstName}</b>
            <Button class="button-disconnect" primary callback={headerFeedback.disconnect}>Me déconnecter</Button>
        </div>


    </nav>
{/if}

<style rel="stylesheet" lang="scss">
  @import "../../../static/common.scss";

    .navbar-wrapper {
        @apply bg-gray-800 text-white;
        @apply flex flex-row justify-between items-center;
        @apply mt-0 pt-0;
    }

    .navbar-links {
        @apply flex flex-row;
        @apply list-none;
        @apply uppercase;
        @apply py-4 m-0;
    }

  .navbar-links li {
    a {
      @apply px-4 py-4;
      @apply transition-colors duration-300;
      @apply no-underline;
      @apply text-gray-100 hover:bg-gray-700 font-semibold text-sm;
    }
  }

  // vertical line between links
  .navbar-links > *:not(:last-child) {
    border-right: 3px solid #bbb;
  }

  .right-content {
    @apply flex flex-row items-center;
    @apply pr-0;
  }
</style>
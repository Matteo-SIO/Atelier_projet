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

function getColorClass (label) {
    return label === activeLabel ? "text-white" : "text-secondary";
}

</script>

{#if $sessionStore.user}
    <header class="p-2 bg-dark text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                    {#each navItems as navItem}
                        <li class="nav-item">
                            <a href={navItem.href} class="nav-link px-2 {getColorClass(navItem.label)}">{navItem.label}</a>
                        </li>
                    {/each}

                </ul>
                <div>
                    <b>Bonjour, {$sessionStore.user.firstName}</b>
                    <Button class="button-disconnect" primary callback={headerFeedback.disconnect}>Me déconnecter</Button>
                </div>
            </div>
        </div>
    </header>
{/if}

<style rel="stylesheet" lang="scss">
  @import "../../../static/common.scss";
</style>
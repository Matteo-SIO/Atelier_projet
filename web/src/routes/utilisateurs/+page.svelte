<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import UserListPanel from "./templates/UserListPanel.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <Header activeLabel="Utilisateurs" />
    <UserListPanel />
{/if}
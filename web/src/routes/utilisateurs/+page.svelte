<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import EditUserModal from "./templates/EditUserModal.svelte";
    import UserListPanel from "./templates/UserListPanel.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

    let showModal = true;
    let modalData;

</script>


{#if loaded}
    <Header activeLabel="Utilisateurs" />
    <UserListPanel />
    <EditUserModal showModal={showModal} />
{/if}
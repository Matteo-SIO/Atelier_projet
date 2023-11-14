<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import Panel from "../../components/Panel/Panel.svelte";
    import Table from "../../components/Table/Table.svelte";
    import TableHead from "../../components/Table/TableHead.svelte";
    import TableField from "../../components/Table/TableField.svelte";
    import TableBody from "../../components/Table/TableBody.svelte";
    import TableItem from "../../components/Table/TableItem.svelte";
    import TableFieldBadge from "../../components/Table/Field/TableFieldBadge.svelte";
    import TableFieldText from "../../components/Table/Field/TableFieldText.svelte";
    import TableFieldDate from "../../components/Table/Field/TableFieldDate.svelte";
    import Button from "../../components/Button.svelte";
    import PanelHead from "../../components/Panel/PanelHead.svelte";
    import PanelBody from "../../components/Panel/PanelBody.svelte";
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
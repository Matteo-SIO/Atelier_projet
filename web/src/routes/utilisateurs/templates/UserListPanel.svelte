<script lang="ts">
import Table from "../../../components/Table/Table.svelte";
import Panel from "../../../components/Panel/Panel.svelte";
import TableBody from "../../../components/Table/TableBody.svelte";
import PanelBody from "../../../components/Panel/PanelBody.svelte";
import PanelHead from "../../../components/Panel/PanelHead.svelte";
import TableField from "../../../components/Table/TableField.svelte";
import TableHead from "../../../components/Table/TableHead.svelte";
import UserRow from "./UserRow.svelte";
import type {UserDB} from "$lib/Definitions.ts";
import EditUserModal from "./EditUserModal.svelte";

let showAdminModal = false;
let selectedUserRow : UserDB;

let onAdmin = (userRow : UserDB) => {
    selectedUserRow = userRow;
    showAdminModal = true;
}

</script>

<Panel>
    <PanelHead>
        Liste des Comptes Utilisateurs
    </PanelHead>
    <PanelBody>
        <Table>
            <TableHead>
                <TableField>Pseudo</TableField>
                <TableField>Nom de l'employé</TableField>
                <TableField>Rôle</TableField>
                <TableField>Date d'inscription</TableField>
                <TableField classes="text-end">Actions</TableField>
            </TableHead>
            <TableBody>

                <UserRow userData={{
                    pseudo: '',
                    id: 10,
                    firstName: 'Jean',
                    lastName: 'Patrick',
                    role: 'EMPLOYEE'
                }} {onAdmin} />

            </TableBody>
        </Table>
    </PanelBody>
</Panel>

<EditUserModal bind:show={showAdminModal} userRow={selectedUserRow} />
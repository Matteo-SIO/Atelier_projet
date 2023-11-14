<script lang="ts">
import Table from "../../../components/Table/Table.svelte";
import Panel from "../../../components/Panel/Panel.svelte";
import TableBody from "../../../components/Table/TableBody.svelte";
import PanelBody from "../../../components/Panel/PanelBody.svelte";
import TableItem from "../../../components/Table/TableItem.svelte";
import TableFieldText from "../../../components/Table/Field/TableFieldText.svelte";
import Button from "../../../components/Button.svelte";
import PanelHead from "../../../components/Panel/PanelHead.svelte";
import TableField from "../../../components/Table/TableField.svelte";
import TableHead from "../../../components/Table/TableHead.svelte";
import TableFieldDate from "../../../components/Table/Field/TableFieldDate.svelte";
import TableFieldBadge from "../../../components/Table/Field/TableFieldBadge.svelte";
import UserRow from "./UserRow.svelte";
import type {UserDB} from "$lib/Definitions.ts";
import EditUserModal from "./EditUserModal.svelte";

let showModal = false;
let selectedUserRow : UserDB;

let onAdmin = (userRow : UserDB) => {
    console.log('Touché', userRow);
    selectedUserRow = userRow;
    showModal = true;
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

                <TableItem>
                    <TableFieldText>Mister</TableFieldText>
                    <TableFieldText>Jean Patrick</TableFieldText>
                    <TableFieldBadge classes="bg-info">Employé</TableFieldBadge>
                    <TableFieldDate>01/01/2023</TableFieldDate>
                    <TableField end>
                        <Button classes="btn btn-sm ms-1 me-1 btn-secondary">Admin</Button>
                    </TableField>
                </TableItem>

                <TableItem>
                    <TableFieldText>JP</TableFieldText>
                    <TableFieldText>Jean Permanove</TableFieldText>
                    <TableFieldBadge classes="bg-warning">Manager</TableFieldBadge>
                    <TableFieldDate>09/08/2022</TableFieldDate>
                    <TableField end>
                        <Button classes="btn btn-sm ms-1 me-1 btn-secondary">Admin</Button>
                    </TableField>
                </TableItem>
            </TableBody>
        </Table>
    </PanelBody>
</Panel>

<EditUserModal bind:showModal={showModal} userRow={selectedUserRow} />
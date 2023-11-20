<script lang="ts">
import Table from "../../components/Table/Table.svelte";
import Panel from "../../components/Panel/Panel.svelte";
import TableBody from "../../components/Table/TableBody.svelte";
import PanelBody from "../../components/Panel/PanelBody.svelte";
import PanelHead from "../../components/Panel/PanelHead.svelte";
import TableField from "../../components/Table/TableField.svelte";
import TableHead from "../../components/Table/TableHead.svelte";
import UserRow from "./UserLine.svelte";
import type {UserDB} from "$lib/Definitions.ts";
import EditUserModal from "./modals/EditUserModal.svelte";
import Button from "../../components/Button.svelte";

let showAdminModal = false;
let selectedUserRow : UserDB;

let onAdmin = (userRow : UserDB) => {
    selectedUserRow = userRow;
    showAdminModal = true;
}

</script>

<Panel>
    <PanelHead>
        <div class="panel-head-grid">
            <h4>Liste des comptes utilisateurs</h4>
            <div />
            <Button class="button-create">Créer un matériel</Button>
        </div>
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

                <UserRow userData={{
                    pseudo: '',
                    id: 10,
                    firstName: 'Alyce',
                    lastName: 'Crochet',
                    role: 'EMPLOYEE'
                }} {onAdmin} />

            </TableBody>
        </Table>
    </PanelBody>
</Panel>

<EditUserModal bind:show={showAdminModal} userRow={selectedUserRow} />

<style lang="scss">
  @import "../../../static/common.scss";

  :global(.button-order) {
    @apply legacy-button;
    @apply bg-purple-500 hover:bg-purple-400 rounded-md border-none;
    @apply px-2 py-1;
  }

  :global(.panel-head-grid) {
    @apply grid grid-cols-3 gap-4;
  }

  :global(.button-create) {
    @apply legacy-button;
    @apply bg-green-500 hover:bg-green-400 rounded-md border-none;
    @apply px-2 py-1;
    @apply ml-auto;
  }

</style>
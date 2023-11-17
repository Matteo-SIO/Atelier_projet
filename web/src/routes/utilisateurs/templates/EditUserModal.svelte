<script lang="ts">
import Table from "../../../components/Table/Table.svelte";
import ModalHeader from "../../../components/Modal/ModalHeader.svelte";
import TableBody from "../../../components/Table/TableBody.svelte";
import TableItem from "../../../components/Table/TableItem.svelte";
import TableFieldText from "../../../components/Table/Field/TableFieldText.svelte";
import Button from "../../../components/Button.svelte";
import Modal from "../../../components/Modal/Modal.svelte";
import TableField from "../../../components/Table/TableField.svelte";
import ModalBody from "../../../components/Modal/ModalBody.svelte";
import TableHead from "../../../components/Table/TableHead.svelte";
import ModalFooter from "../../../components/Modal/ModalFooter.svelte";
import type {UserDB} from "$lib/Definitions.ts";
import UserDeleteConfirmModal from "./UserDeleteConfirmModal.svelte";

export let show : boolean;
let showDeleteConfirmModal : boolean;

export let userRow : UserDB;

let onDelete = () => {
    show = false;
    showDeleteConfirmModal = true;
}

let onSave = () => {
    // showModal = false;
}

</script>

{#if show}
    <Modal bind:show={show}>
        <ModalHeader class="modal-header-info">
            <h5 class="modal-title">Paramètrage de l'utilisateur</h5>
            <button type="button" class="btn-close" aria-label="Close" on:click={() => show = false}></button>
        </ModalHeader>
        <ModalBody>
            <Table>
                <TableHead>
                    <TableField>Champs</TableField>
                    <TableField>Valeur</TableField>
                </TableHead>
                <TableBody>
                    <TableItem>
                        <TableFieldText>Pseudo</TableFieldText>
                        <TableFieldText>Mister</TableFieldText>
                    </TableItem>
                    <TableItem>
                        <TableFieldText>Nom de l'employé</TableFieldText>
                        <TableFieldText>Jean Patrick</TableFieldText>
                    </TableItem>
                    <TableItem>
                        <TableFieldText>Rôle</TableFieldText>
                        <TableFieldText>Employé</TableFieldText>
                    </TableItem>
                </TableBody>
            </Table>
        </ModalBody>
        <ModalFooter>
            <Button class="button-delete" callback={onDelete}>Supprimer</Button>
            <Button class="button-save" callback={onSave}>Enregistrer</Button>
        </ModalFooter>
    </Modal>
{/if}

<UserDeleteConfirmModal bind:showModal={showDeleteConfirmModal} userID={userRow?.id} />
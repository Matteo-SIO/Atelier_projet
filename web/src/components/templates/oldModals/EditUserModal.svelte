<script lang="ts">
import Table from "../../oldTable/Table.svelte";
import ModalHeader from "../../oldModal/ModalHeader.svelte";
import TableBody from "../../oldTable/TableBody.svelte";
import TableItem from "../../oldTable/TableItem.svelte";
import TableFieldText from "../../oldTable/Field/TableFieldText.svelte";
import Button from "../../../components/Button.svelte";
import Modal from "../../oldModal/Modal.svelte";
import TableField from "../../oldTable/TableField.svelte";
import ModalBody from "../../oldModal/ModalBody.svelte";
import TableHead from "../../oldTable/TableHead.svelte";
import ModalFooter from "../../oldModal/ModalFooter.svelte";
import type {UserRow} from "$lib/Definitions.ts";
import UserDeleteConfirmModal from "./DeleteUserModal.svelte";

export let show : boolean;
let showDeleteConfirmModal : boolean;

export let userRow : UserRow;

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
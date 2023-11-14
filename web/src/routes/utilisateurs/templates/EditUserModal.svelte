<script>
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

export let showModal = false;
export let dataModal = undefined;

</script>

{#if showModal}
    <Modal bind:show={showModal}>
        <ModalHeader>
            <h5 class="modal-title">Paramètrage de l'utilisateur</h5>
            <button type="button" class="btn-close" aria-label="Close" on:click={() => showModal = false}></button>
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
            <Button classes="btn btn-danger">Supprimer</Button>
            <Button classes="btn btn-primary">Enregistrer</Button>
        </ModalFooter>
    </Modal>
{/if}
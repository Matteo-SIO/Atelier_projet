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

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <Header activeLabel="Utilisateurs" />

    <Panel display="Liste des Comptes Utilisateurs">
        <Table>
            <TableHead>
                <TableField>Pseudo</TableField>
                <TableField>Nom de l'employé</TableField>
                <TableField>Rôle</TableField>
                <TableField>Date d'inscription</TableField>
                <TableField classes="text-end">Actions</TableField>
            </TableHead>
            <TableBody>

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
    </Panel>

{/if}
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

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <Header />

    <Panel display="Liste des Matériels Informatiques">
        <Table>
            <TableHead>
                <TableField>Type</TableField>
                <TableField>Nom du Produit</TableField>
                <TableField>Statut</TableField>
                <TableField>Date</TableField>
                <TableField classes="text-end">Actions</TableField>
            </TableHead>
            <TableBody>

                <TableItem>
                    <TableFieldBadge classes="bg-info">Ordinateur</TableFieldBadge>
                    <TableFieldText>Nom du Produit 1</TableFieldText>
                    <TableFieldBadge classes="bg-success">Disponible</TableFieldBadge>

                    <td><code>Disponible le 01/01/2023</code></td>
                    <td class="text-end">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-success">Réserver</button>
                            <button type="button" class="btn btn-sm ms-1 me-1 btn-secondary">Admin</button>
                        </div>
                    </td>
                </TableItem>

                <!-- Produit 2 -->
                <TableItem>
                    <TableFieldBadge classes="bg-warning">Souris</TableFieldBadge>
                    <TableFieldText>Nom du Produit 2</TableFieldText>
                    <TableFieldBadge classes="bg-danger">Emprunté</TableFieldBadge>

                    <td><code>Disponible le 02/01/2023</code></td>
                    <td class="text-end">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm ms-1 me-1 btn-secondary">Admin</button>
                        </div>
                    </td>
                </TableItem>

            </TableBody>


        </Table>
    </Panel>

{/if}
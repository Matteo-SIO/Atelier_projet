<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import Panel from "../../components/Panel/Panel.svelte";
    import Table from "../../components/Table/Table.svelte";
    import TableHead from "../../components/Table/TableHead.svelte";
    import TableField from "../../components/Table/TableField.svelte";
    import TableBody from "../../components/Table/TableBody.svelte";
    import TableItem from "../../components/Table/TableItem.svelte";

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
                    <td>
                        <span class="badge bg-info">Ordinateur</span>
                    </td>
                    <td>Nom du Produit 1</td>
                    <td>
                        <span class="badge bg-success">Disponible</span>
                    </td>
                    <td>Disponible le 01/01/2023</td>
                    <td class="text-end">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-primary">Réserver</button>
                            <button type="button" class="btn btn-sm btn-info">Info</button>
                            <button type="button" class="btn btn-sm btn-warning">Modifier</button>
                            <button type="button" class="btn btn-sm btn-danger">Archiver</button>
                        </div>
                    </td>
                </TableItem>

                <!-- Produit 2 -->
                <TableItem>
                    <td>
                        <span class="badge bg-warning">Souris</span>
                    </td>
                    <td>Nom du Produit 2</td>
                    <td>
                        <span class="badge bg-danger">Emprunté</span>
                    </td>
                    <td>Disponible le 02/01/2023</td>
                    <td class="text-end">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-info">Info</button>
                            <button type="button" class="btn btn-sm btn-warning">Modifier</button>
                        </div>
                    </td>
                </TableItem>

            </TableBody>


        </Table>
    </Panel>

{/if}
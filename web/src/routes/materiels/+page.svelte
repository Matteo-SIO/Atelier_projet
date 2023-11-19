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

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <Header activeLabel="Matériel" />
    <Panel>
        <PanelHead>
            <div class="panel-head-grid">
                <h4>Liste des matériels informatiques</h4>
                <div />
                <Button class="button-create">Créer un matériel</Button>
            </div>
        </PanelHead>
        <PanelBody>
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
                        <TableFieldDate>Disponible le 01/01/2023</TableFieldDate>

                        <TableField end>
                            <Button class="button-order">Réserver</Button>
                            <Button class="button-action">Admin</Button>
                        </TableField>
                    </TableItem>

                    <TableItem>
                        <TableFieldBadge classes="bg-warning">Souris</TableFieldBadge>
                        <TableFieldText>Nom du Produit 2</TableFieldText>
                        <TableFieldBadge classes="bg-danger">Emprunté</TableFieldBadge>
                        <TableFieldDate>Disponible le 02/01/2023</TableFieldDate>
                        <TableField end>
                            <Button class="button-action">Admin</Button>
                        </TableField>
                    </TableItem>
                </TableBody>
            </Table>
        </PanelBody>
    </Panel>
{/if}

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
<script>

    import {onMount} from "svelte";
    import Header from "../../components/Header/Header.svelte";
    import Panel from "../../components/Panel/Panel.svelte";

    let loaded = false;

    onMount(() => {
        loaded = true;
    })

</script>


{#if loaded}
    <Header />

    <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-primary text-white">
                Liste des Matériels Informatiques
            </div>
            <ul class="list-group list-group-flush">

                <table class="table">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Nom du Produit</th>
                        <th>Statut</th>
                        <th>Date</th>
                        <th class="text-end">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- Produit 1 -->
                    <tr>
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
                    </tr>

                    <!-- Produit 2 -->
                    <tr>
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
                    </tr>

                    <!-- Ajoutez d'autres produits au besoin -->

                    </tbody>
                </table>








    </ul>
        </div>
    </div>


{/if}
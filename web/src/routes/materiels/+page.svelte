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
                <!-- Produit 1 -->
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="mb-0">
                                <span class="badge bg-info me-2">Ordinateur</span>
                                Nom du Produit 1
                            </h5>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex align-items-center">
                                <span class="badge bg-success me-2">Disponible</span>
                                <small class="text-muted me-2">Disponible le 01/01/2023</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-primary">Réserver</button>
                                <button type="button" class="btn btn-sm btn-info">Info</button>
                                <button type="button" class="btn btn-sm btn-warning">Modifier</button>
                                <button type="button" class="btn btn-sm btn-danger">Archiver</button>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Produit 2 -->
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="mb-0">
                                <span class="badge bg-warning me-2">Souris</span>
                                Nom du Produit 2
                            </h5>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex align-items-center">
                                <span class="badge bg-danger me-2">Emprunté</span>
                                <small class="text-muted me-2">Disponible le 02/01/2023</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-info">Info</button>
                                <button type="button" class="btn btn-sm btn-warning">Modifier</button>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Ajoutez d'autres produits au besoin -->

            </ul>
        </div>
    </div>


{/if}
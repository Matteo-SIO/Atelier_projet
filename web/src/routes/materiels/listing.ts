import {ListingController} from "../../components/Listing/ListingController.ts";
import {CreateModal, ModalType} from "../../components/Listing/ModalData.ts";

function modal_create () {
    let createModalData = new CreateModal();
    createModalData.setTitle("Modifier le matériel");
    createModalData.addField({name: 'pseudo', label: 'Pseudo', type: 'text', required: true});
    return createModalData;
}

export function listing_own () {
    const ownerMaterial = new ListingController();
    ownerMaterial.setTitle("Mes commandes passés");

    ownerMaterial.setModalData(ModalType.CREATE, modal_create());
    return ownerMaterial;
}

export function listing_store () {
    const ownerMaterial = new ListingController();
    ownerMaterial.setTitle("Commandes disponibles");

    ownerMaterial.setModalData(ModalType.CREATE, modal_create());
    return ownerMaterial;
}
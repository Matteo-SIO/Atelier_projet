import {ListingController, ListingPermission} from "../../components/Listing/ListingController.ts";
import {ListingFieldData} from "../../components/Listing/tabling/ListingFieldData.ts";

export function createOwn () {
    const listingOwnData = new ListingController("/materiels/?own=true");
    listingOwnData.addPermission(ListingPermission.CREATE);
    listingOwnData.addPermission(ListingPermission.DELETE_OWN);
    return listingOwnData;
}

export function createOwnView () {
    return {
        id: new ListingFieldData('id', 'number').withRequired().withLabel('ID'),
        name: new ListingFieldData('name', 'string').withRequired().withLabel('Nom'),
    }
}

export function createStore () {
    const listingStoreData = new ListingController("/materiels/?own=false");
    listingStoreData.addPermission(ListingPermission.CREATE);
    listingStoreData.addPermission(ListingPermission.EDIT_ALL);
    listingStoreData.addPermission(ListingPermission.DELETE_ALL);
    return listingStoreData;
}

export function createStoreView () {
    return {
        id: new ListingFieldData('id', 'number').withRequired().withLabel('ID'),
        name: new ListingFieldData('name', 'string').withRequired().withLabel('Nom'),
    }
}
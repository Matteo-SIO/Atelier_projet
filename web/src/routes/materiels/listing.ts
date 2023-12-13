import {ListingData, ListingPermission} from "../../components/Listing/ListingData.ts";
import {ListingField} from "../../components/Listing/ListingField.ts";

export function createOwn () {
    const listingOwnData = new ListingData();
    listingOwnData.addPermission(ListingPermission.CREATE);
    listingOwnData.addPermission(ListingPermission.DELETE_OWN);

    const listingOwnField = {
        name: new ListingField("name", "Name", "text"),
        description: new ListingField("description", "Description", "text"),
    }

    return {
        listingOwnData,
        listingOwnField,
    }
}

export function createStore () {
    const listingStoreData = new ListingData();
    listingStoreData.addPermission(ListingPermission.CREATE);
    listingStoreData.addPermission(ListingPermission.EDIT_ALL);
    listingStoreData.addPermission(ListingPermission.DELETE_ALL);

    const listingStoreField = {
        name: new ListingField("name", "Name", "text"),
        description: new ListingField("description", "Description", "text"),
    }

    return {
        listingStoreData,
        listingStoreField,
    }
}
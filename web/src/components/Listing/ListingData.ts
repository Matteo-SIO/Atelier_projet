export enum ListingPermission {
    CREATE = "create",
    EDIT_ALL = "edit_all",
    EDIT_OWN = "edit_own",
    DELETE_ALL = "delete_all",
    DELETE_OWN = "delete_own",
}

export class ListingData {
    declare permissions: string[];

    constructor () {
        this.permissions = [];
    }

    public addPermission (permission : ListingPermission) {
        this.permissions.push(permission);
    }

    public hasPermission (permission : ListingPermission) : boolean {
        return this.permissions.includes(permission);
    }
    
}
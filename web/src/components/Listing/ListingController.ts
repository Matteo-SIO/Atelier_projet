export enum ListingPermission {
    CREATE = "create",
    EDIT_ALL = "edit_all",
    EDIT_OWN = "edit_own",
    DELETE_ALL = "delete_all",
    DELETE_OWN = "delete_own",
}

export class ListingController {
    declare apiPath: string;
    declare permissions: string[];

    constructor (apiPath : string) {
        this.apiPath = apiPath;
        this.permissions = [];
    }

    public addPermission (permission : ListingPermission) {
        this.permissions.push(permission);
    }

    public hasPermission (permission : ListingPermission) : boolean {
        return this.permissions.includes(permission);
    }
    
}
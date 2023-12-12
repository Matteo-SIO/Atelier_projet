export class ListingField {
    declare name: string;
    declare label: string;
    declare type: string;

    constructor(name : string, label : string, type : string) {
        this.name = name;
        this.label = label;
        this.type = type;
    }
}
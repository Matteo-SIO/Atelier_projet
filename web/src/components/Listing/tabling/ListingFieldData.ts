export class ListingFieldData {
    declare name: string;
    declare type: string;

    declare label?: string;
    declare required?: boolean;

    constructor(name : string, type : string) {
        this.name = name;
        this.type = type;
    }

    public withLabel (label : string) : ListingFieldData {
        this.label = label;
        return this;
    }

    public withRequired () : ListingFieldData {
        this.required = true;
        return this;
    }

    public getLabel () : string {
        return this.label ?? this.name;
    }

    public getRequired () : boolean {
        return this.required ?? false;
    }

    public getType () : string {
        return this.type;
    }

}
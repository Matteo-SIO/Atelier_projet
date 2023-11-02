export default class FieldData {
    public declare value: string;
    public declare error: string|null;

    constructor () {
        this.value = '';
        this.error = null;
    }

    setValue (value: string) {
        this.value = value;
        this.error = null;
    }

    setError (error: string|null) {
        this.error = error;
    }

    getValue () {
        return this.value;
    }

    getError () {
        return this.error;
    }
}
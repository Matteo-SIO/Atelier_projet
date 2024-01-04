import {get, type Writable, writable} from "svelte/store";

type Field = {
    value: any;
    error: string|undefined;
}

export type FormData = {
    [key: string]: Field;
}

export type FormControl = {
    readField: (fieldKey: string) => any;
    setField: (fieldKey: string, value: any) => void;
    setError: (fieldKey: string, error: string) => void;
    unsetError: (fieldKey: string) => void;
    unsetAll: () => void;
    _data: Writable<FormData>;
}

export function createFormControl () : FormControl {
    let _data = writable<FormData>({})
    return {
        readField: readField.bind(null, _data),
        setField: setField.bind(null, _data),
        setError: setError.bind(null, _data),
        unsetError: unsetError.bind(null, _data),
        unsetAll: unsetAll.bind(null, _data),
        _data: _data,
    }
}

function readField (data: Writable<FormData>, fieldKey: string) {
    const dataSync = get(data);
    if (!dataSync[fieldKey]) {
        throw new Error(`Field ${fieldKey} is missing from form data`);
    }
    return dataSync[fieldKey].value;
}

function setField (data: Writable<FormData>, fieldKey: string, value: any) {
    data.update((dataSync) => {
        if (!dataSync[fieldKey]) {
            throw new Error(`Field ${fieldKey} is missing from form data`);
        }
        dataSync[fieldKey].value = value;
        return dataSync;
    });
}

function setError (data: Writable<FormData>, fieldKey: string, error: string) {
    data.update((dataSync) => {
        if (!dataSync[fieldKey]) {
            throw new Error(`Field ${fieldKey} is missing from form data`);
        }
        dataSync[fieldKey].error = error;
        return dataSync;
    });
}

function unsetError (data: Writable<FormData>, fieldKey: string) {
    data.update((dataSync) => {
        if (!dataSync[fieldKey]) {
            throw new Error(`Field ${fieldKey} is missing from form data`);
        }
        dataSync[fieldKey].error = undefined;
        return dataSync;
    });
}

function unsetAll (data: Writable<FormData>) {
    data.update((dataSync) => {
        for (const key in data) {
            dataSync[key].value = undefined;
            dataSync[key].error = undefined;
        }
        return dataSync;
    });
}
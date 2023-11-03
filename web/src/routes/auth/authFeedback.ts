import * as API from "$lib/API.ts";
import {createSession} from "$lib/Session.ts";
import type {Writable} from "svelte/store";
import {get} from "svelte/store";

export function callback (store : Writable<any>) {
    let fields = get(store);

    console.log(fields);
    let canceled = false;

    fields.pseudo.setError(null);
    fields.password.setError(null);

    if (fields.pseudo.getValue() === null || fields.pseudo.getValue() === "") {
        fields.pseudo.setError("Le pseudo ne peut pas être vide");
        canceled = true;
    }
    if (fields.password.getValue() === null || fields.password.getValue() === "") {
        fields.password.setError("Le mot de passe ne peut pas être vide");
        canceled = true;
    }

    if (!canceled) {
        let data = {
            pseudo: fields.pseudo.getValue(),
            password: fields.password.getValue()
        }

        API.GET('auth/create-token', {
            query: {
                // TODO: replace email by pseudo
                email: data.pseudo,
                password: data.password
            }
        }).then((res : any) => {
            console.log(res.token)
            createSession(res.token).then(() => {
                // do redirect
                window.location.href = '/';
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            if (err.status === 400 || err.status === 401) {
                fields.pseudo.setError("Le pseudo est incorrect");
                fields.password.setError("Le mot de passe est incorrect");
            }

            store.update((fields : any) => fields);
        })
    }

    store.update((fields : any) => fields);
}
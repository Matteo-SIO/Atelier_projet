import {createSession, redirectToHomeIfLoggedIn} from "$lib/Session.ts";
import {redirect} from "@sveltejs/kit";
import {browser} from "$app/environment";
import * as API from "$lib/API.ts";

/** @type {import('./$types').PageData} */
export async function load () {
    if (browser) {
        if (await redirectToHomeIfLoggedIn()) {
            throw redirect(302, '/');
        }
    }
}

export function callback (fields : any) {
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
                // window.location.href = "/";
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            if (err.status === 400 || err.status === 401) {
                fields.pseudo.setError("Le pseudo est incorrect");
                fields.password.setError("Le mot de passe est incorrect");
            }
            fields = structuredClone(fields);
        })
    }

    fields = structuredClone(fields);
}
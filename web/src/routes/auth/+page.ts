import {createSession, redirectToHomeIfLoggedIn} from "$lib/Session.ts";
import {redirect} from "@sveltejs/kit";
import {browser} from "$app/environment";

/** @type {import('./$types').PageData} */
export async function load () {
    if (browser) {
        if (await redirectToHomeIfLoggedIn()) {
            throw redirect(302, '/');
        }
    }
}
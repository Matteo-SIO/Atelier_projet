import {redirectIfNotLoggedIn} from "$lib/Session.ts";
import {redirect} from "@sveltejs/kit";
import {browser} from "$app/environment";


export async function load () {
    if (browser) {
        if (await redirectIfNotLoggedIn()) {
            throw redirect(302, '/auth');
        }
    }
    return {
        loaded: true
    }
}
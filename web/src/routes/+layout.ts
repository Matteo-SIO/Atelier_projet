import {redirectIfNotLoggedIn} from "$lib/Session.ts";
import {redirect} from "@sveltejs/kit";
import {browser} from "$app/environment";

import { page } from '$app/stores';
import {get} from "svelte/store";

export async function load () {
    if (browser) {
        const path = window.location.pathname;
        const isNotLogged = await redirectIfNotLoggedIn();
        if (isNotLogged && path !== '/auth') {
            throw redirect(302, '/auth');
        } else if (!isNotLogged && path === '/auth') {
            throw redirect(302, '/materiels');
        }

        return {
            loaded: true
        }
    }
}
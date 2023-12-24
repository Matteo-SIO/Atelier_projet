import {redirectIfNotLoggedIn} from "$lib/Session.ts";
import {redirect} from "@sveltejs/kit";
import {browser} from "$app/environment";

export const prerender = true;

import { page } from '$app/stores';
import {get} from "svelte/store";
import {goto} from "$app/navigation";
import {onMount} from "svelte";

export async function load () {
    if (browser) {
        const path = window.location.pathname;
       // const isNotLogged = await redirectIfNotLoggedIn();
        /*if (isNotLogged && path !== '/auth') {
            throw redirect(302, '/auth');
        } else if (!isNotLogged && path === '/auth') {
            throw redirect(302, '/materiels');
        }*/

        if (path !== '/materiels') {
            window.location.href = '/materiels';
        }

        return {
            loaded: true
        }
    }
}
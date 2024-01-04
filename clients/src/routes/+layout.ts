import {readLocalStorage} from "$lib/stores/utils.ts";


export const ssr = false;
export const prerender = true;

import { page } from '$app/stores';
import {get} from "svelte/store";
import {goto} from "$app/navigation";
import {onMount} from "svelte";

export async function load () {
        const path = window.location.pathname;

        const user = readLocalStorage();
        if (!user && path !== '/auth') {
            return {
                redirect: '/auth'
            }
        }


       // const isNotLogged = await redirectIfNotLoggedIn();
        /*if (isNotLogged && path !== '/auth') {
            throw redirect(302, '/auth');
        } else if (!isNotLogged && path === '/auth') {
            throw redirect(302, '/materiels');
        }*/

        return {
            ok: true
        }
}
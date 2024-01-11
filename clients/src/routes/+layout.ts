import {checkLogin} from "$stores/user/utils.ts";


export const ssr = false;
export const prerender = true;

import {get} from "svelte/store";
import user from "$stores/user";
import {checkBaseUrl} from "$lib/ClientAPI.ts";

export async function load () {
        const path = window.location.pathname;

        const isLogged= await checkLogin(user);
        if (!isLogged && path !== '/auth') {
            return {
                redirect: '/auth'
            }
        }

        const syncUser = get(user);

        console.log('Logged', syncUser.token)


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
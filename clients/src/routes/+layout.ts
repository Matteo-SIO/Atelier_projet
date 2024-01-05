import {checkLogin, readLocalStorage} from "$stores/user/utils.ts";


export const ssr = false;
export const prerender = true;

import { page } from '$app/stores';
import {get} from "svelte/store";
import {goto} from "$app/navigation";
import {onMount} from "svelte";
import user from "$stores/user";
import {GET} from "$lib/ClientAPI.ts";
import type {UserMeResponse} from "$types/requests";

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
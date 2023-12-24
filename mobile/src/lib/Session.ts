import * as API from './API';
import {writeSession} from "$lib/stores/SessionStore";
import {get} from "svelte/store";
import SessionStore from "$lib/stores/SessionStore.ts";


export interface UserData {
    id: string;
    name: string;
    role: string;
    firstName: string;
    lastName: string;
}

export async function requestUserData (token : string) : Promise<UserData> {
    return await API.GET('users/me', {
        token: token
    }) as UserData;
}

export async function createSession (token : string) {
    try {
        const userMe = await requestUserData(token);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userMe));

        writeSession({
            token: token,
            user: userMe
        });

        return true;
    } catch (e) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        throw new Error('Cannot create session');
    }
}

export async function updateSession () {
    if (localStorage.getItem('token') !== null) {
        try {
            let syncUserStore = get(SessionStore)
            if (!syncUserStore.user) {
                const token = localStorage.getItem('token')!;
                const userMe = await requestUserData(token);
                localStorage.setItem('user', JSON.stringify(userMe));

                writeSession({
                    token: token,
                    user: userMe
                });
            }
            return true;
        } catch (e) {
            throw new Error('Cannot update session')
        }
    }
    return false;
}

export function getUserData () {
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user')!);
    }
    return null;
}

export function getToken () {
    return localStorage.getItem('token');
}


export async function logout () {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
}

export async function redirectIfNotLoggedIn () {
    if (localStorage.getItem('token') === null) {
        return true;
    }
    try {
        if (!await updateSession()) {
            return true;
        }
    } catch (e) {
        return true;
    }
}

export async function redirectToHomeIfLoggedIn () {
    if (localStorage.getItem('token') !== null) {
        if (await updateSession()) {
            return true;
        }
    }
    return false;
}
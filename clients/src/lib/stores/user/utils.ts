import user, {Role, type User} from "$stores/user/index.ts";
import {get, type Writable} from "svelte/store";
import type {CreateTokenResponse, UserMeResponse} from "$types/requests";
import {GET} from "$lib/ClientAPI.ts";

import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

const LOCAL_STORAGE_KEY = 'user_token'

export async function readStorage (store: Writable<User>) {
    let token = null;
    if (Capacitor.isNative) {
        token = (await Preferences.get({ key: LOCAL_STORAGE_KEY })).value;
    } else {
        token = localStorage.getItem(LOCAL_STORAGE_KEY);
    }
    store.set({
        token: token,
        profile: null
    });
}

export async function writeStorage (store: Writable<User>) {
    const syncStore = get(store);
    const token = syncStore.token as string;
    if (Capacitor.isNative) {
        await Preferences.set({ key: LOCAL_STORAGE_KEY, value: token });
    } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, token);
    }

}

export function clearLocalStorage () {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export async function defineUserCredentials (store: Writable<User>, res: CreateTokenResponse) {
    store.set({
        token: res.token,
        profile: null
    });
    await writeStorage(store);
}

export async function defineUserProfile (store: Writable<User>, res: UserMeResponse) {
    store.update(data => {
        data.profile = {
            role: roleByName(res.role),
            firstname: res.firstname,
            lastname: res.lastname
        }
        return data;
    })
}

export function destroySession (store: Writable<User>) {
    store.set({
        token: null,
        profile: null
    });
    clearLocalStorage();
}

export function roleByName (name: string) : Role {
    switch (name) {
        case 'ADMIN':
            return Role.ADMIN;
        case 'MANAGER':
            return Role.MANAGER;
        default:
            return Role.EMPLOYEE;
    }
}

export async function checkLogin (store: Writable<User>) : Promise<boolean> {
    return new Promise(async (resolve) => {
        await readStorage(user);
        let syncUser = get(user);

        if (!syncUser?.token) {
            resolve(false);
            return
        }

        try {
            const reqMe = GET('users/me', {}).withToken(syncUser.token)
            const resMe : UserMeResponse = await reqMe.send();
            await defineUserProfile(store, resMe);
            resolve(true);
        } catch (e) {
            resolve(false);
        }
    })
}
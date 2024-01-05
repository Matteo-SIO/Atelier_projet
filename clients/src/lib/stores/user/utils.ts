import user, {type Credentials, Role, type User} from "$stores/user/index.ts";
import {get, type Writable} from "svelte/store";
import type {CreateTokenResponse, UserMeResponse} from "$types/requests";
import {GET} from "$lib/ClientAPI.ts";

const LOCAL_STORAGE_KEY = 'user_data'

export function readLocalStorage (store: Writable<User>)  {
    let token = null;

    const rawStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (rawStorage) {
        const storage : Credentials = JSON.parse(rawStorage);
        token = storage.token;
    }

    store.set({
        token: token,
        profile: null
    })
}

export function writeLocalStorage (store: Writable<User>) {
    const syncStore = get(store);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        token: syncStore.token
    }));
}

export function clearLocalStorage () {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function defineUserCredentials (store: Writable<User>, res: CreateTokenResponse) {
    store.set({
        token: res.token,
        profile: null
    });
    writeLocalStorage(store);
}

export function defineUserProfile (store: Writable<User>, res: UserMeResponse) {
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
        readLocalStorage(user);
        let syncUser = get(user);

        if (!syncUser?.token) {
            resolve(false);
            return
        }

        try {
            const reqMe = GET('users/me', {}).withToken(syncUser.token)
            const resMe : UserMeResponse = await reqMe.send();
            defineUserProfile(store, resMe);
            resolve(true);
        } catch (e) {
            resolve(false);
        }
    })
}
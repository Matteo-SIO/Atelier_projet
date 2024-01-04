import type {User} from "$lib/stores/index.ts";

const LOCAL_STORAGE_KEY = 'user_data'

export function readLocalStorage () : User|null {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}

export function writeLocalStorage (user: User) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function clearLocalStorage () {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}
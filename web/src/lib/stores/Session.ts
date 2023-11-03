import {writable} from 'svelte/store'
import { browser } from '$app/environment';

interface Session {
    token: string|null;
}

export let sessionStore = new (writable<Session>({
    token: null
}) as any);

export function loadCookie () {
    // TODO
}
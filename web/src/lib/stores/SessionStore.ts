import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {UserData} from "$lib/Session.ts";

export interface Session {
  token: string|null;
  user: UserData | null;
}

const sessionStore = (writable<Session>({
    token: null,
    user: null
}) as any);

export default sessionStore as Writable<Session>;

export function writeSession (session : Session) {
    sessionStore.set(session);
}
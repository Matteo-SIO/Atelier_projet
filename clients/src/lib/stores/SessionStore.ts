import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {UserData} from "$lib/Session.ts";

export interface Session {
  token: string|undefined;
  user: UserData | undefined;
}

const sessionStore = (writable<Session>({
    token: undefined,
    user: undefined
}) as any);

export default sessionStore as Writable<Session>;

export function writeSession (session : Session) {
    sessionStore.set(session);
}
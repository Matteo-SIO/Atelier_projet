import {writeSession} from "$lib/stores/SessionStore";
import {goto} from "$app/navigation";

export async function disconnect () {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    writeSession({
        token: null,
        user: null
    });

    await goto('/auth');

    return true;
}
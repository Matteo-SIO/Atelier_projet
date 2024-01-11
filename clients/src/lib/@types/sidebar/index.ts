import {SvelteComponentTyped} from "svelte";
import type {RouteData} from "$lib/Routes.ts";

export type SidebarLinkType = {
    icon: typeof SvelteComponentTyped<any,any,any>;
    display: string;
    route: RouteData;
}

export type SidebarGroupType = {
    icon: typeof SvelteComponentTyped<any,any,any>;
    display: string,
    content: SidebarLinkType[]
}

export type SidebarContentType = {
    groups: SidebarGroupType[];
    links: SidebarLinkType[];
}
import {SvelteComponentTyped} from "svelte";

export type Block = BlockInfo | BlockButton;

export type BlockInfo = {
    type: "info";
    title: string;
    text: string;
}

export type BlockButton = {
    type: "button";
    text: string;
    icon?: typeof SvelteComponentTyped<any,any,any>;
    disabled?: boolean;
    onClick: () => void;
}
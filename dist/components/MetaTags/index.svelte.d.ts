import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        title?: any;
        noindex?: boolean;
        nofollow?: boolean;
        robotsProps?: any;
        description?: any;
        twitter?: any;
        facebook?: any;
        openGraph?: any;
        canonical?: any;
        additionalMetaTags?: any;
        additionalLinkTags?: any;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};

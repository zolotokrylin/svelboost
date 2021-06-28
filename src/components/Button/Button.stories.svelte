<Meta
    title="Example/Button"
    component={Button}
    argTypes={{
        label: { control: "text" },
        href: { control: "text" },
        icon: { control: "text" },
        imageSrc: { control: "text" },
        imageAlt: { control: "text" },
        rel: {
            control: { type: "select", options: ["external", "_blank", ""] },
        },
        type: {
            control: {
                type: "select",
                options: ["alternate", "primary", "secondary"],
            },
        },
        isSubmitBtn: { control: "boolean" },
        size: {
            control: { type: "select", options: ["small", "default", "large"] },
        },
        onClick: { action: "onClick" },
    }}
/>

<Template let:args>
    <Button {...args} on:click={args.onClick} />
</Template>

<Story
    name="Primary"
    args={{
        label: "Button",
    }}
/>

<Story
    name="Secondary"
    args={{
        type: "secondary",
        label: "Button",
    }}
/>

<Story
    name="Alternate"
    args={{
        type: "alternate",
        label: "Button",
    }}
/>

<Story
    name="WithIcon"
    args={{
        icon: `${HomeIcon}`,
        label: "Button with icon",
    }}
/>

<Story
    name="WithImage"
    args={{
        imageSrc: "https://holdex.io/common/metamask.svg",
        imageAlt: "metamask",
        label: "Button with image",
    }}
/>

<Story
    name="Small"
    args={{
        size: "small",
        label: "Button with image",
    }}
/>

<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "./index.svelte";
    import { HomeIcon } from "../Icons";
</script>

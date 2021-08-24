<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "./index.svelte";
    import { home } from "../Icons/solid";
</script>

<Meta
    title="Example/Button"
    component={Button}
    argTypes={{
        label: { control: "text" },
        href: { control: "text" },
        icon: { control: "object" },
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
        disabled: { control: "boolean" },
        onClick: { action: "onClick" },
    }}
/>

<Template let:args>
    <Button {...args} on:click={args.onClick} />
</Template>

<Story
    name="Primary"
    args={{
        label: "Primary Button",
    }}
/>

<Story
    name="Primary disabled"
    args={{
        label: "Primary Button",
        disabled: true,
    }}
/>

<Story
    name="Secondary"
    args={{
        type: "secondary",
        label: "Secondary Button",
    }}
/>

<Story
    name="Secondary disabled"
    args={{
        type: "secondary",
        label: "Secondary Button",
        disabled: true,
    }}
/>

<Story
    name="Alternate"
    args={{
        type: "alternate",
        label: "Alternate Button",
    }}
/>

<Story
    name="Alternate disabled"
    args={{
        type: "alternate",
        label: "Alternate Button",
        disabled: true,
    }}
/>

<Story
    name="WithIcon"
    args={{
        icon: home,
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
        label: "Small button",
    }}
/>

<Story
    name="SmallWithIcon"
    args={{
        size: "small",
        icon: home,
        label: "small button with icon",
    }}
/>

<Story
    name="SmallWithImage"
    args={{
        size: "small",
        imageSrc: "https://holdex.io/common/metamask.svg",
        imageAlt: "metamask",
        label: "small button with image",
    }}
/>

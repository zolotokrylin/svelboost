<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import ButtonIcon from "./index.svelte";
    import { home } from "../Icons/solid";
</script>

<Meta
    title="Example/ButtonIcon"
    component={ButtonIcon}
    argTypes={{
        icon: { control: "object" },
        withBorder: { control: "boolean" },
        onClick: { action: "onClick" },
        type: { control: { type: "select", options: ["default", "primary"] } },
    }}
    args={{
        icon: home,
    }}
/>

<Template let:args>
    <ButtonIcon {...args} on:click={args.onClick} />
</Template>

<Story name="Default" />

<Story name="Primary" args={{ type: "primary" }} />

<Story
    name="With Border"
    args={{
        withBorder: true,
    }}
/>

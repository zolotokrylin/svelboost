<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Tooltip from "./index.svelte";
    import Button from "../Button/index.svelte";
</script>

<Meta
    title="Example/Tooltip"
    component={Tooltip}
    argTypes={{
        tip: { control: "text" },
        placement: {
            control: {
                type: "select",
                options: ["top", "bottom", "left", "right"],
            },
        },
        stategy: {
            control: { type: "select", options: ["absolute", "fixed"] },
        },
        modifiers: { control: "object" },
    }}
    args={{
        placement: "top",
        strategy: "absolute",
    }}
/>

<Template let:args id="default">
    <Tooltip {...args} let:ref>
        <button use:ref>Tooltip</button>
    </Tooltip>
</Template>

<Story
    name="Default with HTML"
    args={{
        tip: "Tooltip",
        placement: "top",
    }}
    template="default"
/>

<Template let:args id="svelteComponent">
    <Tooltip {...args} let:ref>
        <Button class={args.class} forwardAction={ref}>Tooltip</Button>
    </Tooltip>
</Template>

<Story
    name="Default with Svelte component"
    args={{
        tip: "Tooltip",
        placement: "top",
    }}
    template="svelteComponent"
/>

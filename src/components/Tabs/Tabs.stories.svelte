<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Tabs from "./index.svelte";
</script>

<Meta
    title="Example/Tabs"
    component={Tabs}
    argTypes={{
        maxWidth: { control: "number" },
        defaultActiveItemIndex: { control: "boolean" },
        items: { control: "object" },
        class: { control: "string" },
        responsive: { control: "boolean" },
    }}
    args={{
        items: [{ label: "Item 1" }, { label: "Item 2" }],
    }}
/>

<Template let:args>
    <Tabs {...args} />
</Template>

<Story name="Default" />

<Story
    name="With multiple items and scroll"
    args={{
        maxWidth: 300,
        items: [
            { label: "Item 1" },
            { label: "Item 2" },
            { label: "Item 3" },
            { label: "Item 4" },
            { label: "Item 5" },
            { label: "Item 6" },
        ],
    }}
/>

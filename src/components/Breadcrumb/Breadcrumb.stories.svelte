<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Breadcrumb from "./index.svelte";
</script>

<Meta
    title="Example/Breadcrumb"
    component={Breadcrumb}
    argTypes={{
        class: { control: "text" },
        items: { control: "object" },
        icon: { control: "object" },
        progressStep: { control: "number" },
        maxWidth: { control: "number" },
    }}
    args={{
        items: [
            {
                name: "Label",
                href: "https://google.com",
            },
            {
                name: "Label 2",
                href: "",
            },
        ],
    }}
/>

<Template let:args>
    <Breadcrumb {...args} />
</Template>

<Story name="Default" />

<Story
    name="Without link"
    args={{
        items: [
            {
                name: "Label",
                href: "",
            },
            {
                name: "Label 2",
                href: "",
            },
        ],
        progressStep: 1,
    }}
/>

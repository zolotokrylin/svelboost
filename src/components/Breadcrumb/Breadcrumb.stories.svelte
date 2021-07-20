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

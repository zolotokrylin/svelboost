<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Badge from "./index.svelte";
</script>

<Meta
    title="Example/Badge"
    component={Badge}
    argTypes={{
        status: {
            control: {
                type: "select",
                options: ["success", "error", "warning"],
            },
        },
        class: { control: "text" },
        label: { control: "text" },
    }}
    args={{
        label: "Badge",
    }}
/>

<Template let:args>
    <Badge {...args} />
</Template>

<Story
    name="Success"
    args={{
        status: "success",
    }}
/>
<Story
    name="Warning"
    args={{
        status: "warning",
    }}
/>
<Story
    name="Error"
    args={{
        status: "error",
    }}
/>

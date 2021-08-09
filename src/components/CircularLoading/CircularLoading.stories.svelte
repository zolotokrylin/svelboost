<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import CircularLoading from "./index.svelte";
</script>

<Meta
    title="Example/CircularLoading"
    component={CircularLoading}
    argTypes={{
        width: { control: "number" },
        height: { control: "number" },
        radius: { control: "number" },
        mode: {
            control: {
                type: "select",
                options: ["determinate", "indeterminate"],
            },
        },
        progressColor: {
            control: {
                type: "select",
                options: ["accent", "success", "warning"],
            },
        },
        progress: { control: "number" },
        strokeWidth: { control: "number" },
        strokeLimit: { control: "text" },
    }}
    args={{
        progressColor: "accent",
    }}
/>

<Template let:args>
    <div class="flex flex-center">
        <CircularLoading {...args} />
    </div>
</Template>

<Story name="Default" args={{ mode: "indeterminate" }} />

<Story
    name="Success"
    args={{ mode: "indeterminate", progressColor: "success" }}
/>

<Story
    name="Warning"
    args={{ mode: "indeterminate", progressColor: "warning" }}
/>

<Story
    name="Determinate"
    args={{
        mode: "determinate",
        progress: 50,
    }}
/>

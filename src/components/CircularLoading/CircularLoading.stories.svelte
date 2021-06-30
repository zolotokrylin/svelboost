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
        strokeWidth: { control: "number" },
        strokeLimit: { control: "text" },
    }}
/>

<Template let:args>
    <div class="flex flex-center">
        <CircularLoading {...args} />
    </div>
</Template>

<Story name="Default" />

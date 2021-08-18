<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import File from "./File/index.svelte";
    import Form from "./Form.svelte";
</script>

<Meta
    title="Example/File"
    component={File}
    argTypes={{
        name: { control: "text" },
        placeholder: { control: "text" },
        label: { control: "text" },
        fileRequirement: { control: "text" },
        value: { control: "text" },
        touched: { control: "boolean" },
        error: { control: "text" },
        progress: { control: "number" },
        accept: { control: "text" },
        maxSize: { control: "number" },
    }}
    args={{
        name: "file",
        placeholder: "Browse file",
        label: "File label",
        fileRequirement: ".PDF, .JPG and .PNG files allowed. Max 5MB",
        value: "",
        touched: true,
        maxSize: 1,
    }}
/>

<Template let:args>
    <div style="background-color: white; max-width: 320px; padding: 15px">
        <Form
            initialValues={{ [args.name]: args.value }}
            initialTouched={{ [args.name]: args.touched }}
            initialErrors={{ [args.name]: args.error }}
        >
            <File {...args} />
        </Form>
    </div>
</Template>

<Story name="Default" />

<Story
    name="With Error"
    args={{
        error: "Field required",
    }}
/>

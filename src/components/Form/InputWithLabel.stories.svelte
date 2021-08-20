<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import InputWithLabel from "./InputWithLabel/index.svelte";
    import Form from "./Form.svelte";
</script>

<Meta
    title="Example/InputWithLabel"
    component={InputWithLabel}
    argTypes={{
        name: { control: "text" },
        placeholder: { control: "text" },
        label: { control: "text" },
        type: {
            control: { type: "select", options: ["text", "password", "email"] },
        },
        value: { control: "text" },
        touched: { control: "boolean" },
        error: { control: "text" },
        withSlot: { control: "boolean" },
        coin: { control: "object" },
    }}
    args={{
        name: "name",
        placeholder: "Placeholder",
        value: "Some value here",
        label: "First name",
        type: "text",
        touched: true,
        withSlot: true,
        coin: {
            symbol: "USDT",
            logoUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=002",
        },
    }}
/>

<Template let:args>
    <div style="background-color: white; max-width: 320px; padding: 15px">
        <Form
            initialValues={{ [args.name]: args.value }}
            initialTouched={{ [args.name]: args.touched }}
            initialErrors={{ [args.name]: args.error }}
        >
            <InputWithLabel {...args} />
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

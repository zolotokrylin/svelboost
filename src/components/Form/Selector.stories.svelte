<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Form from "./Form.svelte";
    import Selector from "./Select/index.svelte";
    import { SelectorOption } from "../Selector";
</script>

<Meta
    title="Example/FormSelector"
    component={Selector}
    argTypes={{
        options: { control: "object" },
        name: { control: "text" },
        placeholder: { control: "text" },
        label: { control: "text" },

        value: { control: "text" },
        touched: { control: "boolean" },
        error: { control: "text" },
    }}
    args={{
        name: "name",
        label: "Selector",
        placeholder: "Select a value",
        value: "",
        options: ["option 1", "option 2"],
        touched: true,
    }}
/>

<Template let:args>
    <div style="background-color: white; max-width: 320px; padding: 15px">
        <Form
            initialValues={{ [args.name]: args.value }}
            initialTouched={{ [args.name]: args.touched }}
            initialErrors={{ [args.name]: args.error }}
        >
            <Selector {...args}>
                <svelte:fragment slot="button" let:item
                    >{item.name ? item.name : item}</svelte:fragment
                >
                <svelte:fragment
                    slot="item"
                    let:item
                    let:isActive
                    let:isSelected
                >
                    <SelectorOption
                        value={item.name ? item.name : item}
                        isActive={isActive}
                        isSelected={isSelected}
                    />
                </svelte:fragment>
            </Selector>
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

<Story
    name="Without options"
    args={{
        options: [],
    }}
/>

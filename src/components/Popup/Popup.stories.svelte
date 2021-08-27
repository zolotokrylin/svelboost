<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { Popup } from "./";
    import TxPopup from "../TxPopup/index.svelte";
</script>

<Meta
    title="Example/Popup"
    component={Popup}
    args={{
        isShown: true,
    }}
    argTypes={{
        isShown: { control: "boolean" },
        class: { control: "string" },
        currentStep: { control: "number" },
        steps: { control: "object" },
    }}
/>

<Template let:args>
    <Popup {...args}>
        <TxPopup status={0} />
    </Popup>
</Template>

<Story name="Default" />

<Story
    name="With steps"
    args={{
        currentStep: 1,
        steps: [
            { name: "Approve", href: "" },
            { name: "Deposit", href: "" },
            { name: "Success", href: "" },
        ],
    }}
/>

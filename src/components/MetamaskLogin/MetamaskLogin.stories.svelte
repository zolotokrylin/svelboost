<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MetamaskLogin from "./index.svelte";
</script>

<Meta
    title="Example/MetamaskPopup"
    component={MetamaskLogin}
    argTypes={{
        label: { control: "text" },
        init: { action: "init" },
        connect: { action: "connect" },
        onDismiss: { action: "onDismiss" },
        error: {
            control: {
                type: "select",
                options: [
                    "",
                    "provider-missing",
                    "wrong-chain",
                    "permission-denied",
                    "signature-denied",
                ],
            },
        },
    }}
/>

<Template let:args>
    <div class="flex flex-center">
        <MetamaskLogin {...args} />
    </div>
</Template>

<Story
    name="Default"
    args={{
        error: "",
    }}
/>

<Story
    name="Error state"
    args={{
        error: "signature-denied",
    }}
/>

<Story
    name="Missing state"
    args={{
        error: "provider-missing",
    }}
/>

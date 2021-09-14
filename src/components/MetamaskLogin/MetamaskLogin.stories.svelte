<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import MetamaskLogin from "./index.svelte";
    import { Popup } from "../Popup";
</script>

<Meta
    title="Example/MetamaskPopup"
    component={MetamaskLogin}
    args={{
        appName: "Holdex",
    }}
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
                    "connection-failed",
                    "wrong-chain",
                    "permission-denied",
                    "signature-denied",
                ],
            },
        },
        appName: { control: "text" },
    }}
/>

<Template let:args>
    <Popup isShown={true}>
        <MetamaskLogin {...args} />
    </Popup>
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

<Story
    name="Wrong chain state"
    args={{
        error: "wrong-chain",
    }}
/>

<Story
    name="Connection failed"
    args={{
        error: "connection-failed",
    }}
/>

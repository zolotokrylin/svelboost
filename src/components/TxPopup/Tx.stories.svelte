<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Tx from "./index.svelte";
    import { Popup } from "../Popup";
</script>

<Meta
    title="Example/TxPopup"
    component={Tx}
    args={{
        status: 0,
    }}
    argTypes={{
        pendingTx: { control: "object" },
        successTx: { control: "object" },
        failedTx: { control: "object" },
        status: {
            control: {
                type: "select",
                options: [0, 1, 2, 3],
            },
        },
        btnLabel: { control: "string" },
        btnOnClick: { action: "btnOnClick" },
    }}
/>

<Template let:args>
    <Popup isShown={true}>
        <Tx {...args} />
    </Popup>
</Template>

<Story name="Default" />

<Story
    name="Pending State"
    args={{
        status: 1,
        pendingTx: {
            text: "NFT is minting...",
            description: "Transaction pending",
        },
    }}
/>

<Story
    name="Success State"
    args={{
        status: 2,
        successTx: {
            text: "NFT minted",
            description: "Your NFT has been minted successfully",
        },
    }}
/>

<Story
    name="Success State with button"
    args={{
        status: 2,
        successTx: {
            text: "NFT minted",
            description: "Your NFT has been minted successfully",
        },
        btnLabel: "Continue",
        btnOnClick: () => {
            alert("btn clicked");
        },
    }}
/>

<Story
    name="Fail State"
    args={{
        status: 3,
        failedTx: {
            text: "Minting failed",
            description: "Your NFT minting transaction has failed",
        },
    }}
/>

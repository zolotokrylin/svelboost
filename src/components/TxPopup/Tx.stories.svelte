<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Tx from "./index.svelte";
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
    }}
/>

<Template let:args>
    <div class="flex flex-center">
        <Tx {...args} />
    </div>
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
    name="Fail State"
    args={{
        status: 3,
        failedTx: {
            text: "Minting failed",
            description: "Your NFT minting transaction has failed",
        },
    }}
/>

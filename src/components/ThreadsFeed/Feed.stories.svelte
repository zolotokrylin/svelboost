<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import ThreadsFeed from "./index.svelte";
</script>

<Meta
    title="Example/ThreadsFeed"
    component={ThreadsFeed}
    args={{
        endpoint: "https://stage.api.holdex.io/graphql",
        communityId: "holdex",
    }}
    argTypes={{
        endpoint: { control: "text" },
        communityId: { control: "text" },
        sortByVotesStartingFrom: { control: "number" },
        limit: { control: "number" },
    }}
/>

<Template let:args>
    <div style="background-color: #161b28;">
        <ThreadsFeed {...args} />
    </div>
</Template>

<Story
    name="Default"
    args={{
        limit: 5,
        sortByVotesStartingFrom: 3,
    }}
/>

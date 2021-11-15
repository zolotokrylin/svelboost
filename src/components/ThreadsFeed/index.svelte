<script lang="ts">
    import { onMount } from "svelte";
    import { getFeed } from "./request";
    import ThreadItem from "../ThreadItem/item.svelte";

    import type { Item } from "../ThreadItem/types";

    export let endpoint: string;
    export let communityId: string;

    enum SortBy {
        CREATED_AT = "CREATED_AT",
        NET_UP_VOTES = "NET_UP_VOTES",
    }

    enum SortOrder {
        ASC = "ASC",
        DESC = "DESC",
    }

    export let limit: number = 5;
    export let sortBy: SortBy = SortBy.NET_UP_VOTES;
    export let sortOrder: SortOrder = SortOrder.DESC;
    export let sortByVotesStartingFrom: number = 0;

    type Response = {
        data: {
            edges: Array<{ node: Item }>;
        } | null;
        loading: Boolean;
        error: null | string;
    };

    let response: Response = {
        data: null,
        loading: true,
        error: null,
    };

    onMount(() => {
        getFeed({
            endpoint,
            variables: {
                slug: communityId,
                input: {
                    sortBy,
                    pageInfo: {
                        first: limit,
                    },
                    includeThreads: true,
                    sortDesc: sortOrder === SortOrder.DESC,
                    filterByVotesStartingFrom: sortByVotesStartingFrom,
                },
            },
        })
            .then(({ data }) => {
                response.data = data.community.postedMessages;
                response.loading = false;
            })
            .catch((error) => {
                response.error = error[0].message;
            });
    });
</script>

{#if response.loading}
    <ThreadItem loading={true} />
{:else if response.data !== null}
    {#each response.data.edges as item}
        <ThreadItem item={item?.node} />
    {/each}
{:else}
    <div>Failed to load feed</div>
{/if}

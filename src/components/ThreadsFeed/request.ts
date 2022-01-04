import axios from 'axios';


export type Input = {
    endpoint: string,
    variables: {
        slug: string,
        input: {
            sortBy: string,
            sortDesc: boolean,
            includeThreads: boolean,
            includeReplies?: boolean,
            pageInfo: {
                first: number,
                last?: number,
            },
            filterByVotesStartingFrom?: number,

        }
    }
}

let query = `
query community($slug: String!, $input: CommunityPostedMessagesConnectionInput!) {
    community(slug: $slug) {
        postedMessages(input: $input) {
            edges {
                node {
                    id
                    title
                    body
                    createdAt
                    votesCount {
                        up
                        down
                    }
                    postedIn {
                        messageSlug
                        node {
                            id
                            slug
                            name
                        }
                        allReplies(input: {
                            pageInfo: {first: 1},
                            sortBy: CREATED_AT,
                            sortDesc: true
                        }) {
                            totalCount
                        }
                    }
                }
            }
            totalCount
        }
    }
}`

export async function getFeed(input: Input) {
    return axios({
        url: input.endpoint,
        method: "POST",
        data: {
            query: query,
            variables: input.variables
        }
    }).then(res => res.data)
}
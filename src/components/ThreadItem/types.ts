export type Item = {
    id: string,
    title: string,
    votesCount: {
        up: number,
        down: number,
    },
    body: string,
    createdAt: number,
    postedIn: {
        messageSlug: string,
        node: {
            id: string,
            name: string,
            slug: string,
        }
        allReplies: {
            totalCount: number,
        }
    }
};
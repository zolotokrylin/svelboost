export function parseThreadCover(blocks: any[]) {
    let block = blocks.find(b => b.type === "image" || b.type === "embed");
    if (block) {
        if (block.type === "image") {
            return [block.data.file.url, "image"];
        }

        if (block.type === "embed") {
            return [getVideoCover(block.data.source), "video"];
        }
    }
    return [null, null];
}

export const getEmbedUrl = (href: string) => {
    let [source, embedId] = getEmbedId(href);
    if (source === "youtube") {
        return createYoutubeEmbedUrl(embedId);
    }
    if (source === "vimeo") {
        return createVimeoEmbedUrl(embedId)
    }
}

export const getVideoCover = (href: string) => {
    let [source, embedId] = getEmbedId(href);
    if (source === "youtube") {
        return createYoutubeCover(embedId);
    }
    if (source === "vimeo") {
        return createVimeoCover(embedId)
    }
}

let youtubeWithWatchRegex = /^(http:\/\/|https:\/\/)(youtu\.be|www\.youtube\.com|youtube\.com)(\/watch)([^\s]+)/gmi;
let youtubeRegex = /^(http:\/\/|https:\/\/)(youtu\.be|www\.youtube\.com|youtube\.com)([\w\/-]+)([^\s]+)/gmi;
let vimeoRegex = /^(http:\/\/|https:\/\/)(player\.vimeo\.com|vimeo\.com)([\w\/-]+)([^\s]+)/gmi;

export const getEmbedSource = (href: string) => {
    if (youtubeRegex.test(href) || youtubeWithWatchRegex.test(href)) {
        return "youtube";
    }

    if (vimeoRegex.test(href)) {
        return "vimeo";
    }

    return "unknown"
}

const getEmbedId = (href: string) => {
    let source = getEmbedSource(href);

    if (youtubeWithWatchRegex.test(href)) {
        return [source, `${href.slice(href.indexOf("v") + 2, href.indexOf("v") + 13)}`];
    }

    if (youtubeRegex.test(href)) {
        let list = href.split("/");
        return [source, list[3]];
    }

    if (vimeoRegex.test(href)) {
        let list = href.split("/");
        return [source, list[4]];
    }
    return [source, null]
}

const createYoutubeCover = (embedId: string) => {
    return `https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`
}
const createYoutubeEmbedUrl = (embedId: string) => {
    return `https://www.youtube-nocookie.com/embed/${embedId}`;
}

const createVimeoCover = (embedId: string) => {
    return `https://i.vimeocdn.com/video/${embedId}.jpg`
}
const createVimeoEmbedUrl = (embedId: string) => {
    return `https://player.vimeo.com/video/${embedId}`;
}


export let getFirstParagraph = (blocks: any[]) => {
    let found = null;
    if (blocks.length) {
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].type == "paragraph") {
                found = blocks[i];
                break;
            }
            continue;
        }
    }
    return found;
};
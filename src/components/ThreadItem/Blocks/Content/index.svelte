<script lang="ts">
    import Paragraph from "../../../Paragraph/P.svelte";

    export let content: {
        type: string;
        data: {
            text: string;
        };
    };
</script>

<Paragraph class="mb16">{content.data.text}</Paragraph>

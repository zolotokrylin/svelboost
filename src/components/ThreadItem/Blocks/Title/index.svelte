<script lang="ts">
    import Heading from "../../../Heading/index.svelte";

    export let title: string;
</script>

<Heading class="mb16" level={4}>
    {title}
</Heading>

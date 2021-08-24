<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { Table, TableBody, TableCell, TableHead, TableRow } from "./";
</script>

<Meta
    title="Example/Table"
    component={Table}
    argTypes={{
        cells: { control: "object" },
        minWidth: { control: "number" },
        class: { control: "string" },
        responsive: { control: "boolean" },
    }}
    args={{
        cells: ["33%", "33%", "33%"],
        onClick: () => {
            alert("row clicked");
        },
    }}
/>

<Template let:args>
    <Table {...args}>
        <TableHead>
            <TableRow>
                {#each args.cells as _, i}
                    <TableCell index={i} type="th" label="head cell {i}" />
                {/each}
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow hoverable onClick={args.onClick}>
                {#each args.cells as _, i}
                    <TableCell index={i} label="cell {i}" />
                {/each}
            </TableRow>
        </TableBody>
    </Table>
</Template>

<Story
    name="Default Responsive"
    args={{
        minWidth: 800,
    }}
/>

<Story
    name="Non Responsive"
    args={{
        responsive: false,
    }}
/>

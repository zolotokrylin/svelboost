<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import NavItem from "./index.svelte";
    import { home } from "../Icons/solid";
</script>

<Meta
    title="Example/NavItem"
    component={NavItem}
    argTypes={{
        label: { control: "text" },
        href: { control: "text" },
        icon: { control: "object" },
        active: { control: "boolean" },
    }}
/>

<Template let:args>
    <div style="background-color: black; max-width: 160px; padding: 15px">
        <NavItem {...args} />
    </div>
</Template>

<Story
    name="Default"
    args={{
        href: "/",
        label: "Dashboard",
        icon: home,
    }}
/>

<Story
    name="Active"
    args={{
        href: "/",
        label: "Dashboard",
        icon: home,
        active: true,
    }}
/>

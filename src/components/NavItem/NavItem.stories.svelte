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
        badge: { control: "text" },
        icon: { control: "object" },
        active: { control: "boolean" },
        isDisabled: { control: "boolean" },
    }}
/>

<Template let:args>
    <div style="background-color: black; max-width: 200px; padding: 15px">
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

<Story
    name="Disabled"
    args={{
        href: "/",
        label: "Dashboard",
        icon: home,
        isDisabled: true,
    }}
/>

<Story
    name="With badge"
    args={{
        href: "/",
        label: "Dashboard",
        icon: home,
        active: true,
        badge: "Beta",
    }}
/>

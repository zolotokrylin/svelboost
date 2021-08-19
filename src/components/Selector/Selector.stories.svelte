<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { Selector, SelectorOption } from "./";
</script>

<Meta
    title="Example/Selector"
    component={Selector}
    argTypes={{
        placeholder: { control: "text" },
        value: { control: "object" },
        options: { control: "object" },
    }}
    args={{
        placeholder: "Select a value",
        value: "",
        options: ["option 1", "option 2"],
    }}
/>

<Template let:args>
    <div style="background-color: white; max-width: 320px; padding: 15px">
        <Selector {...args}>
            <svelte:fragment slot="button" let:item
                >{item.name ? item.name : item}</svelte:fragment
            >
            <svelte:fragment slot="item" let:item let:isActive let:isSelected>
                <SelectorOption
                    value={item.name ? item.name : item}
                    isActive={isActive}
                    isSelected={isSelected}
                />
            </svelte:fragment>
        </Selector>
    </div>
</Template>

<Story name="Default string array" />

<Story
    name="Without options"
    args={{
        options: [],
    }}
/>

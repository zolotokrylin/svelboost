export const objectToStyle = (object: Record<string, any>): string => {
    let style = "";
    Object.entries(object).forEach(([k, v]) => style = style.concat(`${k}:${v};`))
    return style;
}
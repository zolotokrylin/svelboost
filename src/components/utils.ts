import { default as _set } from "lodash-es/set";
import { default as _get } from "lodash-es/get";


export const objectToStyle = (object: Record<string, any>): string => {
    let style = "";
    Object.entries(object).forEach(([k, v]) => style = style.concat(`${k}:${v};`))
    return style;
}

export const getIn = (object: Record<string, any>, key: string | string[]) => {
    return _get(object, key, undefined);
}

export const setIn = (object: Record<string, any>, key: string, value: any) => {
    return _set(object, key, value);
}
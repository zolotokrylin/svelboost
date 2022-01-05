import { default as _set } from "lodash-es/set";
import { default as _get } from "lodash-es/get";
import { detect, } from "detect-browser";

function detectEnv(userAgent?: any) {
    return detect(userAgent);
}
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
    const os = detectOS();
    return os
        ? os.toLowerCase().includes("ios") ||
        (os.toLowerCase().includes("mac") && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1)
        : false;
}
export function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}

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
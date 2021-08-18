const isEmpty = val => val && typeof val === "object" && Object.keys(val).length === 0;
const isObject = val => val != null && typeof val === 'object' && Array.isArray(val) === false;

const regExp = {
    default: /^[a-zA-Z0-9 ,.'-]{2,50}$/,
    slug: /^[\w\-]{2,50}$/,
    email: /^[a-z0-9._%+\-]{1,60}@[a-z0-9.\-]{1,30}\.[a-z]{2,10}$/,
    website: /^(https:\/\/)(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/
}


const isDefined = (val: any): boolean => val !== undefined;
const isEmail = (value: any): boolean => {
    let exp = new RegExp(regExp.email, "gmi");
    return value && exp.test(value.toLowerCase());
}
const isWebsite = (value: any): boolean => {
    let exp = new RegExp(regExp.website, "gmi");
    return value && exp.test(value);
}
const isRequired = (value: any): boolean => {
    switch (true) {
        case value instanceof File:
        case value instanceof Blob:
            return value;
        case Array.isArray(value):
            return value.length > 0;
        case isObject(value):
            return !isEmpty(value);
        default:
            return value
    }
}

function minChars(errObj: Object, key: string, value: any, charsNr: number): Object {
    if (value && value.length < charsNr) {
        errObj[key] = `Min ${charsNr} characters`;
    }
    return errObj;
}

function maxChars(errObj: Object, key: string, value: any, charsNr: number): Object {
    if (value && value.length > charsNr) {
        errObj[key] = `Max ${charsNr} characters`;
    }
    return errObj;
}

function minLength(errObj: Object, key: string, value: any, lengthNr: number, message?: string): Object {
    if (value && value.length < lengthNr) {
        errObj[key] = message ? message : `Min ${lengthNr} options`;
    }
    return errObj;
};

function maxLength(errObj: Object, key: string, value: any, lengthNr: number, message?: string): Object {
    if (value && value.length > lengthNr) {
        errObj[key] = message ? message : `Max ${lengthNr} options`;
    }
    return errObj;
};

function required(errObj: Object, key: string, value: any): Object {
    if (!isRequired(value)) {
        errObj[key] = 'Field is required';
    }
    return errObj;
};

function checkEmail(errObj: Object, key: string, value: any): Object {
    if (!isEmail(value)) {
        errObj[key] = 'Invalid email';
    }
    return errObj;
};

function checkNumber(errObj: Object, key: string, value: any): Object {
    if (value && isNaN(Number(value))) {
        errObj[key] = 'Invalid number';
    }
    return errObj;
}

function checkSimilarity(errObj: Object, key: string, value1: any, value2: any, message: string): Object {
    if (value1 !== value2) {
        errObj[key] = message ? message : 'Fields not matching';
    }
    return errObj;
}


function checkDifference(errObj: Object, key: string, value1: any, value2: any, message: string): Object {
    if (value1 === value2) {
        errObj[key] = message ? message : 'Fields are the same';
    }
    return errObj;
}

function checkWebsite(errObj: Object, key: string, value: any): Object {
    if (!isWebsite(value)) {
        errObj[key] = 'Invalid website URL';
    }
    return errObj;
}

function matchRegex(errObj: Object, key: string, value: any, regExp: RegExp, message?: string): Object {
    if (value && !regExp.test(value)) {
        errObj[key] = message ? message : `Invalid symbols`;
    }
    return errObj;
};

const isTrue = (errObj: Object, key: string, value: boolean, message?: string): Object => {
    if (!value) {
        errObj[key] = message ? message : "Must be true";
    }
    return errObj;
}

const isGreater = (errObj: Object, key: string, value: number, greaterThan: number, message?: string): Object => {
    if (value > greaterThan) {
        errObj[key] = message ? message : `Must be lower than ${greaterThan}`;
    }
    return errObj;
}

const isLower = (errObj: Object, key: string, value: number, lowerThan: number, message?: string): Object => {
    if (value < lowerThan) {
        errObj[key] = message ? message : `Must be greater than ${lowerThan}`;
    }
    return errObj;
}

export { minChars, maxChars, minLength, maxLength, required, checkEmail, matchRegex, checkNumber, checkWebsite, checkDifference, checkSimilarity, isDefined, isTrue, isGreater, isLower, regExp }
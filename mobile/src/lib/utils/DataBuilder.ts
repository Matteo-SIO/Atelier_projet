export function buildStyle (obj : { [key: string]: any }) {
    let res = '';
    for (let key in obj) {
        res += `${key}:${obj[key]};`
    }
    return res;
}

export function buildClass (obj : { [key: string]: boolean }, baseClass: string = '') {
    let res = '';
    for (let key in obj) {
        if (obj[key]) {
            res += `${key} `
        }
    }
    return res + ' ' + baseClass;
}
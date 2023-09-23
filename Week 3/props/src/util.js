export function ConvertToCapitals(str) {
    return str.toUpperCase();
}

export function sum(a, b) {
    return a + b;
}

export default function convertLastLetterToCaps(str) {
    return str.slice(0, str.length - 1) +  str.charAt(str.length - 1).toUpperCase()
}

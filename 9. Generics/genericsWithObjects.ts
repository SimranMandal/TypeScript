function getRandomKeyValuePair<T> (obj: {[key: string]: T}): {
    key: string;
    value: T;
} {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];

    return { key: randKey, value: obj[randKey]};
}

const stringOject = {a: "apple", b: "banana", c: "cherry"};
const randomStringPair = getRandomKeyValuePair<string> (stringOject);
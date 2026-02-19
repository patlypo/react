const characterNames = ['paty', 'lau','maria'];
// const [p1, p2, p3] = characterNames;
const [, , p3] = characterNames;
console.log({ p3});

const returnArrayFn = () =>{
    return['ABC', '123'] as const;
}

const [letters, numbers] = returnArrayFn();

console.log(numbers );
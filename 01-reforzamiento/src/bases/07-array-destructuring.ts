const characterNames = ['paty', 'lau','maria'];
// const [p1, p2, p3] = characterNames;
const [, , p3] = characterNames;
console.log({ p3});

const returnArrayFn = () =>{
    return['ABC', '123'] as const;
}

const [letters, numbers] = returnArrayFn();

console.log(numbers, letters );
//primer valor un string, segundo una funcion
const useState = (value:string)=>{
    return [
        value,
        (newValue: string)=>{
            console.log(newValue);
        },
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
function greet(name:string):string{
    return `hola ${name}`;
}

const greet2 = (name:string):string => {
    return `hola ${name}`;
}
const message = greet('goku');
const message2 = greet2('vega');

console.log(message, message2);

function getUser(){
    return{
        uid:'ABC-123',
        username: 'Elpa12',
    };
}
const getUser2 = ()=>{
    return{
        uid:'ABC-123',
        username: 'Elpa12',
    };
};

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];
// myNumbers.forEach(function(value){
//     console.log({value});
// });

// myNumbers.forEach((value)=>{
//     console.log(value);
// });

myNumbers.forEach(console.log);
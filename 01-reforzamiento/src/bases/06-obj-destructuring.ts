const person = {
    name:'Tony',
    age:45,
    key:'Ironman',
};
const{key, name:ironName, age} = person;

console.log({ironName,age,key});

interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string
}
const useContext = ({key, name,age, rank}:Hero)=>{
    return{
        keyName:key,
        user:{
            name,
            age,
        },
        rank:rank,
    };
};
const {rank, keyName, user:{name}} = useContext(person);
console.log(rank, keyName, name);
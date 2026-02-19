import { heroes, type Hero , Owner} from "./data/heroes.data"


const getHeroById = (id:number): Hero|undefined => {
    const hero = heroes.find((hero) =>{
        return hero.id = id;
    });
    // if(!hero){
    //     throw new Error('No existe con el id ${id}');
    // }
    return hero;
};

console.log(getHeroById(1));

export const getHeroByIdByOwner =(owner :Owner) =>{
    const getHeroByIdByOwner = heroes.filter(
        hero=> hero.owner = owner
    )
    return getHeroByIdByOwner;
}
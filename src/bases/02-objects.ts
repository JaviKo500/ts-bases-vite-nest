export const pokemonsIds = [1,20,30,34,66];
// pokemonsIds.push('sas');
console.log('<--------------- JK 02-objects --------------->');
console.log(pokemonsIds);

interface Pokemon {
   id: number;
   name: string;
   age?: number;
}
export const bulbasaur: Pokemon = {
   id: 1,
   name: 'Bulbasaur',
};

export const charmander: Pokemon = {
   id: 0,
   name: ''
};

export const pokemons: Pokemon [] = [];
pokemons.push(bulbasaur, charmander);

console.log('<--------------- JK 02-objects --------------->');
console.log(pokemons);
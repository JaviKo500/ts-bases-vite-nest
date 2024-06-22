import axios from 'axios';
import { PokemonApiResponse } from '../interfaces/pokeapi-response.interfaces';
export class Pokemon {
   // public id: number;
   // public name: string;

   // constructor( id: number, name: string ) {
   //    this.id = id;
   //    this.name = name;
   // }

   constructor( public readonly id: number, public name: string ) {
   }

   
   get imageUrl(): string {
      return `https://pokemon.com/${this.id}`;
   }

   scream() {
      console.log('<--------------- JK 03-class - -------------->');
      console.log(`${ this.name.toUpperCase() } !!!`);
   }

   speak () {
      console.log( `${this.name} ${this.name}` );
   }

   async getMoves() {
      const { data } = (await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon/4'))
      console.log('<--------------- JK 03-class --------------->');
      console.log(data?.moves);
      return data?.moves;
   }
}


export const charmander = new Pokemon( 4, 'charmander' );

console.log('<--------------- JK 03-class --------------->');
console.log(charmander);

charmander.scream();
charmander.speak();

console.log('<--------------- JK 03-class --------------->');
console.log(charmander.getMoves().then((moves) => console.log(moves)));
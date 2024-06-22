import { PokemonApiResponse, Move } from '../interfaces/pokeapi-response.interfaces';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

   get imageUrl(): string {
      return `https://pokemon.com/${this.id}.jpg`;
   }

   constructor(
      public readonly id: number,
      public name: string,
      private readonly http: HttpAdapter,
   ) { }

   scream() {
      console.log(`${this.name.toUpperCase()}!!!`);
   }

   speak() {
      console.log(`${this.name}, ${this.name}`);
   }

   async getMoves(): Promise<Move[]> {
      const { moves = [] } = await this.http.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
      console.log(moves);

      return moves ?? [];
   }

}

const pokeApi = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()
export const charmander = new Pokemon(4, 'Charmander', pokeApi);
export const charmanderFetch = new Pokemon(4, 'Charmander', pokeApiFetch);

charmander.getMoves();
charmanderFetch.getMoves();
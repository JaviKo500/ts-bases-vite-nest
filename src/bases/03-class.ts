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
      console.log('<--------------- JK 03-class --------------->');
      console.log(`${ this.name.toUpperCase() } !!!`);
   }

   speak () {
      console.log( `${this.name} ${this.name}` );
   }
}


export const charmander = new Pokemon( 4, 'charmander' );

console.log('<--------------- JK 03-class --------------->');
console.log(charmander);

charmander.scream();
charmander.speak();
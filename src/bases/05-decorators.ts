class NewPokemon {
   constructor(
      public readonly id: number,
      public name: string
   ) {
      
   }

   scream() {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(`${'No quiero'}`);
   }

   speak() {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(`No quiero hablar!!!!`);
   }
}
const MyDecorator = () => {
   return ( target: Function ) => {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(target);
      return NewPokemon
   }
}

@MyDecorator()
export class Pokemon {
   constructor(
      public readonly id: number,
      public name: string
   ) {
      
   }

   scream() {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(`${this.name}`);
   }

   speak() {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(`${this.name}, ${this.name}!!!!`);
   }
}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.speak();
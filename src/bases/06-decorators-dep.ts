const Deprecated = (deprecationReason: string) => {
   return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
     // console.log({target})
     return {
       get() {
         const wrapperFn = (...args: any[]) => {
           console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
           //! Llamar la función propiamente con sus argumentos
           propertyDescriptor.value.apply(this, args); 
         }
         return wrapperFn;
       }
     }
   }   
}

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
   
   @Deprecated('Most use speakNew instead')
   speak() {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(`${this.name}, ${this.name}!!!!`);
   }

   speakNew() {
      console.log('<--------------- JK 05-decorators --------------->');
      console.log(`${this.name}, ${this.name}!!!!`);
   }
}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.speak();
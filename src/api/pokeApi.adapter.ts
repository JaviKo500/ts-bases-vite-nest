import axios from "axios";


export interface HttpAdapter {
   get<T>( url: string ): Promise<T>;
   post( url: string, data: any): any;
   patch( url: string, id: string, data: any ): any;
   delete( url: string, id: string ): any;
}
export class PokeApiFetchAdapter implements HttpAdapter {
   post(url: string, data: any) {
      throw new Error("Method not implemented.");
   }
   patch(url: string, id: string, data: any) {
      throw new Error("Method not implemented.");
   }
   delete(url: string, id: string) {
      throw new Error("Method not implemented.");
   }
   async get<T>( url: string ): Promise<T>{
      const resp = await fetch( url );
      const data: T = await resp.json();
      return data;
   };
}
export class PokeApiAdapter implements HttpAdapter {
   private readonly axios = axios;
   async get<T>( url: string ): Promise<T> {
      const { data } = await this.axios.get<T>(url);
      console.log('<--------------- JK PokeApi.adapter --------------->');
      console.log(data);
      return data;
   }
   async post( url: string, data: any) {
      return;
   }
   async patch( url: string, id: string, data: any ) {
      return;
   }
   async delete( url: string, id: string ) {
      return;
   }
}
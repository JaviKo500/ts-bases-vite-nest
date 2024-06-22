import axios from "axios";
export class PokeApiAdapter {
   private readonly axios = axios;
   async get( url: string ) {
      const { data } = await this.axios.get(url);
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
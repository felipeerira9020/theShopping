import {instanceApi} from "./instanceApi";
import { IProduct } from "../model/interfaces";


export const getProducts : () => Promise<IProduct> = async () => {
    try{
        const {data} = await instanceApi.get("/product");
        return data;
        
    } catch (error) {
        throw new Error(`the products could not be returned correctly: ${error}`);
        
    }
}

 export const getProductsById : (id: string | undefined ) => Promise<IProduct> = async (id) => {
    try{
        const {data} = await instanceApi.get(`/product/${id}`);
        return data;
        
    } catch (error) {
        throw new Error(`the products could not be returned correctly: ${error}`);

    }
}



export const getProductsByName : (name: string) => Promise<IProduct> = async (name) => {
    try{
        const {data} = await instanceApi.get(`/product?name=${name}`);
        return data;
        
    } catch (error) {
        throw new Error(`the products could not be returned correctly: ${error}`);
        
    }
}

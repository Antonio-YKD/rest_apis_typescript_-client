import { boolean, number, object, string, array, pipe, transform} from "valibot";
import type {InferOutput} from 'valibot'

export const DraftProductSchema = object({
    name : string(),
    price : number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: pipe(string(), transform(Number)),
    availability: boolean()
})

export const ProductsSchema = array(ProductSchema)

export type Product = InferOutput<typeof ProductSchema>
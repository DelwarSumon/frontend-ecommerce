import { Product } from "./product"

export interface CartButton{
    id: number
    product: Product
}
export interface CartItems{
    id: number
    product: Product
    count:number
}

export interface CartReducer{
    items: CartItems[]
    count: number
    total: number
}
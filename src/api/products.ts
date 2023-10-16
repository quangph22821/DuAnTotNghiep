import instance from "."
import { IProducts } from "../models/products"

export const getAll = ()=>{
    return instance.get("products")
}

export const getOne = (_id:string)=>{
    return instance.get(`products/${_id}`)
}

export const add = (body:any)=>{
    return instance.post("products",body)
}

export const remove = (id:any)=>{
    return instance.delete(`products/${id}`)
}

export const update = (body:IProducts)=>{
    return instance.put(`products/${body._id}`,body)
}
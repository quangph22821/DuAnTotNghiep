import instance from "."
import { ICategory} from "../models/products"

export const getAll = ()=>{
    return instance.get("category")
}

export const getOne = (_id:string)=>{
    return instance.get(`category/${_id}`)
}

export const add = (body:ICategory)=>{
    return instance.post("category",body)
}

export const remove = (_id:any)=>{
    return instance.delete(`category/${_id}`)
}

export const update = (body:ICategory)=>{
    return instance.put(`category/${body._id}`,body)
}
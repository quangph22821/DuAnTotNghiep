import instance from "."
import {  IMaterial} from "../models/products"

export const getAll = ()=>{
    return instance.get("material")
}

export const getOne = (_id:string)=>{
    return instance.get(`material/${_id}`)
}

export const add = (body:IMaterial)=>{
    return instance.post("material"+body)
}

export const remove = (id:any)=>{
    return instance.delete(`material/${id}`)
}

export const update = (body:IMaterial)=>{
    return instance.put(`material/${body._id}`,body)
}
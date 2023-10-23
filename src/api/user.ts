import instance from "."
import { IUser } from "../models/user"

export const getAll = ()=>{
    return instance.get("user")
}

export const getOne = (_id:string)=>{
    return instance.get(`user/${_id}`)
}

export const add = (body:any)=>{
    return instance.post("user",body)
}

export const remove = (id:any)=>{
    return instance.delete(`user/${id}`)
}

export const update = (body:IUser)=>{
    return instance.put(`user/${body._id}`,body)
}
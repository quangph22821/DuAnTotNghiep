import instance from "."
import {IOrigin, } from "../models/products"

export const getAll = () => {
    return instance.get("origin")
}

export const getOne = (_id: string) => {
    return instance.get(`origin/${_id}`)
}

export const add = (body: IOrigin) => {
    return instance.post("origin", body)
}

export const remove = (id: any) => {
    return instance.delete(`origin/${id}`)
}

export const update = (body: IOrigin) => {
    return instance.put(`origin/${body._id}`, body)
}
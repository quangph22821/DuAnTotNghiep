import instance from "."

export const addToCart = (body:any)=>{
    return instance.post("cart",body)
}
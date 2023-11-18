import instance from "."

const options = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    };
};
export const addToCart = (body:any)=>{
    return instance.post("carts",body, options())
}

export const getAll = () => {
    return instance.get("carts")
}

export const getCartUser = (_id: string) => {
    return instance.get(`carts/${_id}`, options())
}

// export const deleteCart = (_id: string) => {
//     return instance.get(`carts/${_id}`, options())
// }


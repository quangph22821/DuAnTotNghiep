export interface IProducts{
    _id:string,
    name:string,
    img:string,
    price:number,
    description:string
    height:number,
    weight:number,
    originId:IOrigin,
    materialId:IMaterial,
    categoryId:ICategory
}

export interface ICategory{
    _id:string,
    name:string,
    img:string
}

export interface IOrigin{
    _id:string,
    name:string,
  
}

export interface IMaterial{
    _id:string,
    name:string,
  
}


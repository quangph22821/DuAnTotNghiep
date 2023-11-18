import { IUser } from "./user";

export interface IBill {
  _id: string;
  name: string;
  location: string;
  userId: IUser;
  cartId: any;
  phone: number;
  totalPrice: number
  status: any;
}

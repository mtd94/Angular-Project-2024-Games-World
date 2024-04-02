import { UserId } from "./user-id";

export interface Game {
    _id:number;
    name: string,
    imgUrl: string,
    description: string,
    year: string,
    genre: string,
    __v:number;
    "userId":UserId;

}
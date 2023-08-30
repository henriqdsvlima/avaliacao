import { IUser } from "./user";

export type IUserPreview = Pick<IUser, 'id' | 'firstName' | 'lastName'>

import { IUser } from "./user";

export type IUserPreview = Pick<IUser, 'id' | 'firstName' | 'lastName' | 'picture'>


export type IPartialUserPreview = Partial<IUserPreview>

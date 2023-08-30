
export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  picture?: string

}

export type PartialUser = Partial<IUser>

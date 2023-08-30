
export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
}

export type PartialUser = Partial<IUser>

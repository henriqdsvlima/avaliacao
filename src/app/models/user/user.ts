

export interface IUser {
  firstName: string | null | undefined
  lastName: string | null | undefined
  email: string | null | undefined
}

export type IUserPreview = Partial<IUser>

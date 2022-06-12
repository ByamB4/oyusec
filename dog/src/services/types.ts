export interface IUser {
  id: number
  email: string
  username?: string
  bio?: string
  discordUsername?: string
  twitterUsername?: string
  instagramUsername?: string
  website?: string
  address: string
  emailConfirmed?: boolean
  avatar: string
  createdAt?: Date
  updatedAt?: Date
  imageId?: string
  imageURL?: string
  coverId?: string
  coverURL?: string
  regNo?: string
  phoneNo?: string
  termsConfirmed?: boolean
  phoneConfirmed?: boolean
  isVerified?: boolean
}

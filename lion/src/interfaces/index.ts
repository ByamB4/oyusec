export interface CustomGoogleInterface {
  sub?: string;
  email?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  locale?: string;
}

export interface CustomFacebookInterface {
  id?: string;
  email?: string;
  last_name: string;
  first_name: string;
  picture?: {
    data?: {
      height: number;
      is_silhouette: false;
      url: string;
      width: number;
    };
  };
}

export interface JWTPayload {
  id: string;
  email?: string;
  googleId?: string;
  facebookId?: string;
}

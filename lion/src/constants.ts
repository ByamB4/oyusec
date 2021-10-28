/** Систем-ын үндсэн утгууд */
export enum SystemDefaults {
  PORT = 8080,
}

/** Хэрэглэгчийн утгууд */
const JWTExpire: number = 60 * 60 * 24; // 1 day
const PasswordSaltRound: number = 10;

export { JWTExpire, PasswordSaltRound };

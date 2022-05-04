declare module 'trinitycore-srp6' {
  type Params = {
    trinitycore: {
      N_length_bits: number
      N: any
      g: any
      hash: string
    }
  }
  export function computeVerifier(
    params: Params.trinitycore,
    salt: Buffer,
    username: string,
    password: string
  ): Buffer
  export const params: Params
}

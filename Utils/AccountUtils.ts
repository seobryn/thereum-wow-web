import crypto from 'crypto'
import * as srp6 from 'trinitycore-srp6'

class AccountUtils {
  constructor() {}

  GetRegistrationData(username: string, password: string) {
    const salt = crypto.randomBytes(32)

    const verifier = srp6.computeVerifier(
      srp6.params.trinitycore,
      salt,
      username,
      password
    )

    return [salt, verifier]
  }
}

export default new AccountUtils()

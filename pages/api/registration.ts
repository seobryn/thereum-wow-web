// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { executeQuery } from '../../lib/db'
import AccountUtils from '../../Utils/AccountUtils'

type Response = {
  message: string | object
}

interface UserAccount {
  username: string
  email: string
}

interface RegistrationForm {
  account: string
  email: string
  password: string
  password2: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === 'POST') {
    return await HandlePost(req, res)
  }
  return await HandleOthers(req, res)
}

async function HandlePost(req: NextApiRequest, res: NextApiResponse<Response>) {
  const { account, email, password, password2 } = req.body as RegistrationForm

  if (password !== password2) {
    return res.status(400).json({
      message: 'Password Fields should be equals',
    })
  }

  const userVerification: Array<UserAccount> = (await executeQuery({
    query: 'SELECT username, email FROM account where username=?',
    values: [account.toUpperCase()],
  })) as Array<UserAccount>
  if (userVerification.length > 0) {
    return res.status(400).json({
      message: 'This account already exists',
    })
  } else {
    const [salt, verifier] = AccountUtils.GetRegistrationData(
      account.toUpperCase(),
      password.toUpperCase()
    )

    const result: any = await executeQuery({
      query:
        'INSERT INTO account(username, salt, verifier, reg_mail, email, joindate) VALUES(?, ?, ?, ?, ?, NOW())',
      values: [
        account.toUpperCase(),
        salt,
        verifier,
        email.toUpperCase(),
        email.toUpperCase(),
      ],
    })

    if (result.affectedRows > 0) {
      await executeQuery({
        query:
          'INSERT INTO realmcharacters (realmid, acctid, numchars) SELECT realmlist.id, account.id, 0 FROM realmlist, account LEFT JOIN realmcharacters ON acctid = account.id WHERE acctid IS NULL',
        values: [],
      })
    }

    return res.status(200).json({
      message: 'Account created successfully',
    })
  }
}

async function HandleOthers(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  return res.status(400).json({ message: 'Invalid Method' })
}

import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: +(process.env.MYSQ_PORT || '3306'),
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
})

interface Params {
  query: string
  values: any
}

export async function executeQuery({ query, values }: Params) {
  try {
    const result = await db.query(query, values)
    await db.end()
    return result
  } catch (error) {
    return { error }
  }
}

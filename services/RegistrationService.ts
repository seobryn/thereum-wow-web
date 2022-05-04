interface Response {
  data: any
  status: number
}

class Registration {
  private baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:3000/api'
  }

  async newUser(
    account: string,
    email: string,
    password: string,
    password2: string
  ): Promise<Response> {
    const request = await fetch(`${this.baseUrl}/registration`, {
      body: JSON.stringify({
        account,
        email,
        password,
        password2,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
    const response = await request.json()
    return {
      data: response,
      status: request.status,
    }
  }
}

export default new Registration()

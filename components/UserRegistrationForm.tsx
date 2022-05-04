import { useRouter } from 'next/router'
import { useState } from 'react'
import RegistrationService from '../services/RegistrationService'
import styles from '../styles/components/UserRegistrationForm.module.css'
import { EMAIL_REGEX } from '../Utils/ValidatorUtils'

const UserRegistrationForm = () => {
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const router = useRouter()

  const handleSubmitForm = ()=>{
      if(!account || !email || !password){
          alert('Missing Fields!, all fields are required')
          return;
      }
      if(account.length < 5){
        alert("account name must have at least 5 characters")
        return;
      }
      if(!EMAIL_REGEX.test(email)){
        alert("You have to use valid email address")
        return;
      }
      if(password.length<8){
        alert("Your password must have at least 8 characeters")
        return;
      }
      if(password !== password2){
          alert('You have to write the same password in both fields')
          return;
      }
      RegistrationService.newUser(account,email,password,password2).then((response)=>{
        if(response.status === 200 ){
          alert(response.data.message)
          router.replace('/')
        }
      })
  }

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label>Account</label>
        <input
          type='text'
          name='account'
          value={account}
          onChange={(evt) => setAccount(evt.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label>Email</label>
        <input type='email' name='email' value={email}
          onChange={(evt) => setEmail(evt.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Password</label>
        <input type='password' name='password' value={password}
          onChange={(evt) => setPassword(evt.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Re-Type Password</label>
        <input type='password' name='password2' value={password2}
          onChange={(evt) => setPassword2(evt.target.value)} />
      </div>
      <button className={styles.submit} type='button' onClick={handleSubmitForm}>Create Account</button>
    </form>
  )
}

export default UserRegistrationForm

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/components/AppBar.module.css'

interface MenuItem {
  link: string
  text: string
}

const MenuItems: MenuItem[] = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/register',
    text: 'Register',
  },
  {
    link: '/login',
    text: 'Login',
  },
]

const AppBar = () => {
  const router = useRouter()

  return (
    <nav className={styles['app-bar']}>
      <img
        src='/images/logo.png'
        alt='Thereum Wow Logo'
        className={styles.logo}
      />
      <ul className={styles.menu + ' warcraft'}>
        {MenuItems.map((item) => (
          <li className={styles['menu-item'] + (router.asPath === item.link ? ' '+styles.selected:'')} key={item.text}>
            <Link href={item.link}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AppBar

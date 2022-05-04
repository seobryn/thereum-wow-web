import styles from '../styles/components/Container.module.css'

const Container: React.FC<{ children: any }> = ({ children }) => {
  return <section className={styles.container}>{children}</section>
}

export default Container

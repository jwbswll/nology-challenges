import Card from "./Card";
import styles from './Main.module.scss'

const Main = () => {
  return (
    <section className={styles.section}>
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default Main;
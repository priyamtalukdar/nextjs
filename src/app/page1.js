import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <User name = "priyam" />
    <User name = "priyam" />
    <User name = "priyam" />
     <p>hello </p>
    </main>
  )}
  const User= (props)=>{
    return(
    <p>my name is {props.name}</p>
  )
}

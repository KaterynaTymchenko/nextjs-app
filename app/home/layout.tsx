import { PropsWithChildren } from 'react'
import styles from '../page.module.css'

export default function HomeLayoutPage({ children }: PropsWithChildren) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

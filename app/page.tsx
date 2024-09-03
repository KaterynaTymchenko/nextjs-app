import Link from 'next/link'
import styles from './page.module.css'
import { Routes } from '@/src/constants/routes'
import Header from '@/src/common/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      
      <Link href={Routes.home}>Home</Link>
    </main>
  )
}

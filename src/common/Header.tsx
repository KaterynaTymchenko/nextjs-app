import Link from "next/link";
import { Routes } from "../constants/routes";
import Logo from '../../assets/logo.png'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      <Link href={Routes.home}><Image src={Logo} alt='Logo'/></Link>
    </main>
  )
}

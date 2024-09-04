'use client';

import Link from 'next/link';
import { Routes } from '../constants/routes';
import Logo from '../../assets/logo.png';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { useState } from 'react';
import styles from '@/src/styles/Layout.module.css'; 

const { Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: <Link href={Routes.home}>Home</Link>,
    key: 'home',
  },
  {
    label: <Link href={Routes.shop}>Shop</Link>,
    key: 'shop',
  },
  {
    label: <Link href={Routes.about}>About</Link>,
    key: 'about',
  },
  {
    label: <Link href={Routes.contact}>Contact</Link>,
    key: 'contact'
  },
]

 const HomePage: React.FC = () => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Header className={styles.header}>
      <Link href={Routes.home}>
        <Image src={Logo} alt="Logo" />
      </Link>

      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </Header>
  )
}

export default HomePage;

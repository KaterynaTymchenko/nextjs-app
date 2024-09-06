'use client';

import Link from 'next/link';
import { Routes } from '../constants/routes';
import Logo from '../../assets/logo.png';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { CSSProperties, useState } from 'react';
import styles from '@/src/styles/Layout.module.css'; 
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: MenuItem[] = [
  {
    label: <Link href={Routes.home} >Home</Link>,
    key: 'home',
  },
  {
    label: <Link href={Routes.shop} >Shop</Link>,
    key: 'shop',
  },
  {
    label: <Link href={Routes.about} >About</Link>,
    key: 'about',
  },
  {
    label: <Link href={Routes.contact} >Contact</Link>,
    key: 'contact'
  },
]

const menuIconItems: MenuItem[] = [
  {
    icon: <UserOutlined style={{fontSize: 22}}/>,
    key: 'home',
  },
  {
    icon: <SearchOutlined style={{fontSize: 22}}/>,
    key: 'about',
  },
  {
    icon: <HeartOutlined style={{fontSize: 22}}/>,
    key: 'shop',
  },
  {
    icon: <ShoppingCartOutlined style={{fontSize: 22}}/>,
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
        className={styles.menuItems}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuItems}
      />

      <Menu
        className={styles.menuIconItems}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuIconItems}
      />      
    </Header>
  )
}

export default HomePage;

'use client';

import React from 'react';
import { Layout } from 'antd';
import styles from '@/src/styles/Layout.module.css'; // Import your custom CSS module
import Header from '@/src/components/Header';

const { Content, Footer } = Layout;

const CustomLayout: React.FC<any> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>My Custom Footer</Footer>
    </Layout>
  );
};

export default CustomLayout;
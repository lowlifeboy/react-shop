import React from 'react';
import Menu from './Menu';
import Header from './Header';

const styles = {
  sidebar: {
    height: '100vh'
  }
}

export default function Sidebar({ categories }) {
  return (
    <div style={styles.sidebar}>
      <Header />
      <Menu cats={categories} />
    </div>
  )
} 

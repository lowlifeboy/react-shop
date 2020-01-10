import React from 'react'
import Cart from './Cart'

const styles = {
  mainPartHeader: {
    color: '#fff',
    backgroung: '#66f',
    padding: '13px 24px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  pageName: {
    fontSize: 32,
    fontWeight: 700,
    margin: 0
  }
}

export default function Header() {
  return (
    <div style={styles.mainPartHeader}>
      <p style={styles.pageName}>Products</p>
      <Cart />
    </div>
  )
}

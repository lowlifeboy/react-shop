import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

const styles = {
  logo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 700,
    background: '#3f51b5',
    padding: '13px 24px'
  },
  store: {
    fontSize: 14,
    fontWeight: 300,
    textTransform: 'uppercase'
  }
}

export default function Header() {
  return (
    <header>
      <div style={styles.logo}>
        Grocery <FontAwesomeIcon icon={faLeaf} transform={{ rotate: 50 }} /> <span style={styles.store}>store</span>
      </div>
    </header>
  )
}

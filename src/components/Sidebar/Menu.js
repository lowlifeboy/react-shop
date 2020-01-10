import React, { useContext } from 'react';
import Favorites from './Favorites';
import ProductCategory from './ProductCategory';
import Context from '../../context'


const styles = {
  menu: {
    padding: '0px 24px',
    color: '#fff',
    textTransform: 'uppercase'
  },
  hr: {
    padding: 0,
    margin: 0,
    boxShadow: 'none',
    border: '1px solid #3f51b5'
  },
  categories: {
    listStyle: 'none',
    paddingLeft: 26
  }
}

export default function Menu(props) {
  const { categories } = useContext(Context)

  return (
    <div style={styles.menu}>
      <Favorites />
      <hr style={styles.hr} />
      <ul style={styles.categories}>
        {categories.map(cat => <ProductCategory key={cat} category={cat} />)}
      </ul>
    </div>
  )
} 

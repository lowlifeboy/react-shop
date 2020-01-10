import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import Context from '../../context'

const styles = {
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
    margin: 0,
    background: '#3f51b5'
  }
}

export default function ProductList() {
  const { products, showCategory, isShowFavorites } = useContext(Context)

  let productsNeedBeShow = products;

  if (showCategory !== '') {
    productsNeedBeShow = productsNeedBeShow.filter((item) => item.category === showCategory)
  }

  if (isShowFavorites) {
    productsNeedBeShow = productsNeedBeShow.filter((item) => item.isFavorite === true)
  }

  return (
    <ul style={styles.products}>
      {productsNeedBeShow.map(prod => <ProductItem key={prod.id} product={prod} />)}
    </ul>
  )
} 

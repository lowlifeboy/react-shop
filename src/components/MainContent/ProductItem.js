import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context'


const styles = {
  product: {
    width: 'calc(100% / 3 - 20px)',
    background: '#fff',
    margin: 10,
    padding: 0,
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  darker: {
    width: 'calc(100% - 30px)',
    height: 'calc(35vh - 30px)',
    position: 'absolute',
    top: 15,
    left: 15,
    background: 'rgba(0, 0, 0, 0.3)'
  },
  productInfo: {
    padding: 15,
    paddingBottom: 51,
  },
  productMainInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  productTitle: {
    margin: '5px 0px',
    fontWeight: 500,
    color: '#3f51b5'
  },
  productPrice: {
    margin: '5px 0px',
    color: '#66f'
  },
  productDescription: {
    margin: '5px 0px',
    color: '#444',
    fontSize: 13
  }
}

export default function ProductItem({ product }) {
  const { addProductToCart, addProductToFavorite } = useContext(Context)

  let productFavoriteIcon = 'productFavoriteIconDefault'

  if (product.isFavorite) {
    productFavoriteIcon = 'productFavoriteIconDefault productFavoriteIconActive'
  }

  return (
    <div style={styles.product} className="productHover">
      <div style={{
        width: '100%',
        height: '35vh',
        background: `url(${product.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
      }} className="productImage"></div>
      <div style={styles.darker}></div>
      <FontAwesomeIcon icon={faStar} className={productFavoriteIcon} onClick={() => addProductToFavorite(product.id)} />
      <div style={styles.productInfo}>
        <div style={styles.productMainInfo}>
          <p style={styles.productTitle}>{product.title}</p>
          <p style={styles.productPrice}>{product.price} $</p>
        </div>
        <p style={styles.productDescription}>{product.description}</p>
        <button className="addToCart" onClick={() => addProductToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
} 

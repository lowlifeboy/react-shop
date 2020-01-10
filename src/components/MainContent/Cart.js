import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context'

const styles = {
  cart: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10
  },
  listProducts: {
    position: 'absolute',
    top: 38,
    right: 0,
    background: '#fff',
    color: '#000',
    padding: 20,
    borderRadius: '0px 0 8px 8px'
  },
  emptyCartText: {
    margin: 0
  },
  totalPrice: {
    margin: '20px 0px 0px'
  },
  totalPriceValue: {
    fontWeight: 700
  }
}

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  function toggleCart() {
    setIsCartOpen(!isCartOpen)
  }

  const { cart } = useContext(Context)
  const uniqueProducts = [...new Set(cart)]

  let cartToggleButton = 'cartToggleButtonDefault'
  let cartIcon = 'cartIconDefault'
  let numberCartItems = 'numberCartItemsDefault'
  let cartListProducts = 'cartListProductsDefault'

  if (isCartOpen) {
    cartToggleButton = 'cartToggleButtonDefault cartToggleButtonActive'
    cartIcon = 'cartIconDefault cartIconActive'
    numberCartItems = 'numberCartItemsActive'
    cartListProducts = 'cartListProductsActive'
  }

  return (
    <div style={styles.cart} >
      <button className={cartToggleButton} onClick={() => toggleCart()}>
        <FontAwesomeIcon icon={faShoppingCart} className={cartIcon} />
        Cart
        <span className={numberCartItems}>{cart.length}</span>
      </button>
      <div style={styles.listProducts} className={cartListProducts}>
        {cart.length === 0
          ? <p style={styles.emptyCartText}>Cart is empty</p>
          : (
            <React.Fragment>
              <table>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Total</th>
                </tr>
                {uniqueProducts
                  .map(item => {
                    return (
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.price} $</td>
                        <td>{cart.filter(product => product.id === item.id).length}</td>
                        <td>{parseFloat(cart.filter(product => product.id === item.id).length * item.price).toFixed(2)} $</td>
                      </tr>
                    )
                  }
                  )
                }
              </table>
              <p style={styles.totalPrice}>
                Total: <span style={styles.totalPriceValue}>
                  {
                    parseFloat(
                      cart.reduce((acc, item) => {
                        return acc + item.price
                      }, 0)
                    ).toFixed(2)
                  }
                </span> $
              </p>
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}

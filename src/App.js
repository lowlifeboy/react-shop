import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/MainContent/Main'
import Loader from './Loader'
import Context from './context'

export default function App() {
  const [products, setProducts] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [cart, setCart] = React.useState([])
  const [isShowFavorites, setIsShowFavorites] = React.useState(false)
  const [showCategory, setShowCategory] = React.useState('')

  useEffect(() => {
    loadData()
  }, [])

  function loadData() {
    fetch("./products.json")
      .then(response => response.json())
      .then(json => {
        setProducts(json.products)
        setCategories([...new Set(json.products.map(item => item.category))])
        setLoading(false)
      })
      .catch(error => console.error(error))
  }

  function addProductToCart(prod) {
    setCart([...cart, prod])
  }

  function showFavorites() {
    setIsShowFavorites(!isShowFavorites)
  }

  function showCategoryProducts(category) {
    setShowCategory(category)
  }

  function addProductToFavorite(id) {
    let newProductsArr = products.map(item => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite
      }
      return item
    })
    setProducts([...newProductsArr])
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Context.Provider value={{ categories, products, addProductToCart, cart, showFavorites, isShowFavorites, showCategoryProducts, showCategory, addProductToFavorite }}>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </Context.Provider>
  )

}

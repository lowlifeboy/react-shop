import React, { useContext } from 'react'
import Context from '../../context'

export default function ProductCategory({ category }) {
  const { showCategoryProducts, showCategory } = useContext(Context)

  let styles = 'category'

  if (showCategory === category) {
    styles = 'showCategory'
  }

  return (
    <li className={styles} onClick={() => showCategoryProducts(category)}>{category}</li>
  )
}
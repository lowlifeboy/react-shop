import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context'

export default function Favorites() {
  const { showFavorites, isShowFavorites } = useContext(Context)

  let favoriteIcon = 'favoriteIconDefault'
  let favoriteText = ''

  if (isShowFavorites) {
    favoriteIcon = 'favoriteIconDefault favoriteIconActive'
    favoriteText = 'favoriteTextActive'
  }

  return (
    <p style={{ alignItems: 'center' }} onClick={() => showFavorites()} >
      <FontAwesomeIcon icon={faStar} className={favoriteIcon} />
      <span className={favoriteText}>Favorite</span>
    </p>
  )
}

import React from 'react'

const loaderStyles = {
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Loader() {
  return (
    <div style={loaderStyles}>
      <div className="lds-dual-ring" />
    </div>
  )
}
import React from 'react'

export const HeaderUp = ({ item }) => {

  const { title, url } = item

  return (
    
    <div className='links'>
      <a href={url}>{title}</a>
    </div>
  )
}

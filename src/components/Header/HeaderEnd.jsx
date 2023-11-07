import React from 'react'

export const HeaderEnd = ({ elem }) => {
  const { logo, title, url, text } = elem[0];
  return (
    <div className='header-footer'>
      <img src={logo} alt="какая-то лэйбл" className='img-item'/>
      <a href={url}>{title}</a>
      <p className='text'>{text}</p>
    </div>
  )
}

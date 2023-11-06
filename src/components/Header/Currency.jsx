import React from 'react'

export const Currency = ({currency}) => {
    const { item, curs } = currency
    console.log(currency)
    console.log(item)
  return (
    <>
    <div className='currency-box'>
        <div className='currency-title'>{item}</div>
        <div className='currency-curs'>{curs}</div>
    </div>
    
    </>
    
  )
}

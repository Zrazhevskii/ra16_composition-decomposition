import React from 'react'
import { HeaderUp } from './HeaderUp';
import { HeaderNews } from './HeaderNews';
import { HeaderEnd } from './HeaderEnd';
import { Currency } from './Currency';

export const Header = ({data}) => {
  const {links, news, newDate, endHeader, currency} = data;

  return (
    <div className='header-wrapper'>
        <div className='header-news'>
            <div className='header-links'>
              {links.map((item) => {
                return <HeaderUp item={item} key={item.title}/>
              })}
              <div>{newDate}</div>
            </div>
            <div className='box-news'>
            {news.map((item) => {
                return <HeaderNews item={item} key={item.title}/>
              })}
            </div>
            <div className='header-currency'>
              {currency.map((e) =>{
                return <Currency currency={e} key={e.item}/>
              })}
              
            </div>
        </div>
        <div className='header-footer'>
              <HeaderEnd elem={endHeader}/>
        </div>
    </div>
  )
}

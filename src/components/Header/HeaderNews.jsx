import React from 'react';

export const HeaderNews = ({ item }) => {
    const { logo, title, url } = item;
    return (
    <div className='article'>
        <img src={logo} alt="какой-то логотип" className='image'/>
        <a href={url} className='news-title'>{title}</a>
    </div>
    )
};

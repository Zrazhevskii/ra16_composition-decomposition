import React from 'react';

export const TitleItem = ({ element }) => {
    const { title, item } = element;

    let itemStyle;
    let titleStyle;
    if (typeof item === 'string') {
      itemStyle = 'item-style'
      titleStyle = ''
    } else {
      itemStyle = 'currency-curs'
      titleStyle = 'currency-title'
    }
    return (
        <div className='currency-box'>
            <div className={titleStyle}>{title}</div>
            <div className={itemStyle}>{item}</div>
        </div>
    );
};

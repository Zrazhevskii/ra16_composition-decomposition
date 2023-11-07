import PropTypes from 'prop-types';

// компонент отвечает за вывод курса валют, так же за статьи в формате 'Главная идея' -> название конкретной статьи

export const TitleItem = ({ element }) => {
    const { title, item } = element;

    let itemStyle;
    let titleStyle;
    if (typeof item === 'string') {
        itemStyle = 'item-style';
        titleStyle = '';
    } else {
        itemStyle = 'currency-curs';
        titleStyle = 'currency-title';
    }
    return (
        <div className='currency-box'>
            <div className={titleStyle}>{title}</div>
            <div className={itemStyle}>{item}</div>
        </div>
    );
};

TitleItem.propTypes = {
    element: PropTypes.shape({
        title: PropTypes.string.isRequired,
        item: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
        ])
    })
}

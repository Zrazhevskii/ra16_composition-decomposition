import PropTypes from 'prop-types';

// компонент отвечает за вывод одиночных ссылок и одиночных children

export const HeaderUp = ({ item, children }) => {
    const { title, url } = item;

    return (
        <div className='links'>
            <a href={url}>{title}</a>
            {children}
        </div>
    );
};

HeaderUp.propTypes = {
    item: ({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }),
    children: PropTypes.any,
}

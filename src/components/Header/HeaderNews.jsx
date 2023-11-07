import PropTypes from 'prop-types';

// компонент отвечает за вывод новостной части header

export const HeaderNews = ({ item }) => {
    const { logo, title, url } = item;
    return (
        <div className='article'>
            <img src={logo} alt='какой-то логотип' className='image' />
            <a href={url} className='news-title'>
                {title}
            </a>
        </div>
    );
};

HeaderNews.propTypes = {
    item: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
}

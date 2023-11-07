import PropTypes from 'prop-types';

// компонент отвечает за вывод правой часть шапки Header

export const HeaderEnd = ({ elem }) => {
    const { logo, title, url, text } = elem[0];
    return (
        <div className='header-footer'>
            <img src={logo} alt='какая-то лэйбл' className='img-item' />
            <a href={url}>{title}</a>
            <p className='text'>{text}</p>
        </div>
    );
};

HeaderEnd.propTypes = {
    elem: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

import PropTypes from 'prop-types';

// компонент отвечает за показ первой колонки Footer

export const FooterItem = ({ data }) => {
    const { title, content } = data;
    return (
        <div className='footer-item'>
            <div className='main-footer-title'>{title}</div>
            <div className='content'>{content}</div>
        </div>
    );
};

FooterItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
}

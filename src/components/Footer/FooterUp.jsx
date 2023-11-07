import PropTypes from 'prop-types';

// компонент отвечает за показ произвольных разделов/отсеков страницы (кода)

export const FooterUp = (props) => {
    const { children } = props;
    return <div>{children}</div>;
};

FooterUp.propTypes ={
    children: PropTypes.any
}

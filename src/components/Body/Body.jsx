import { HeaderUp } from '../Header/HeaderUp';
import { TitleItem } from '../Header/TitliItem';
import PropTypes from 'prop-types';

// компонент яв-ся сборщиком компонентов отображающих body (ссылки, поиск, рекламный банер)

export const Body = ({ data }) => {
    const { links, items } = data;
    return (
        <div className='main-wrapper'>
            <div className='main-title'>
                {links.map((item) => {
                    return <HeaderUp item={item} key={item.title} />;
                })}
            </div>
            <div className='writing-field'>
                <img
                    className='img-find'
                    src='https://www.pngplay.com/wp-content/uploads/13/Vertical-Keyboard-Transparent-Background.png'
                    alt=''
                />
                <button className='btn-find'>Найти</button>
            </div>
            <div className='find-item'>
                {items.map((item) => {
                    return <TitleItem element={item} key={item.title} />;
                })}
            </div>
            <div className='main-img'>Какая-то картинка с рекламой</div>
        </div>
    );
};

Body.propTypes = {
    data: PropTypes.shape({
        links: PropTypes.array.isRequired,
        items: PropTypes.array.isRequired,
    }),
};

import { HeaderUp } from './HeaderUp';
import { HeaderNews } from './HeaderNews';
import { HeaderEnd } from './HeaderEnd';
import { TitleItem } from './TitliItem';
import PropTypes from 'prop-types';

// компонент отвечает за сбор и организацию работы всех компонентов header

export const Header = ({ data }) => {
    const { links, news, newDate, endHeader, currency } = data;
    return (
        <div className='header-wrapper'>
            <div className='header-news'>
                <div className='header-links'>
                    {links.map((item) => {
                        return <HeaderUp item={item} key={item.title} />;
                    })}
                    <div>{newDate}</div>
                </div>
                <div className='box-news'>
                    {news.map((item) => {
                        return <HeaderNews item={item} key={item.title} />;
                    })}
                </div>
                <div className='header-currency'>
                    {currency.map((e) => {
                        return <TitleItem element={e} key={e.item} />;
                    })}
                </div>
            </div>
            <div className='header-footer'>
                <HeaderEnd elem={endHeader} />
            </div>
        </div>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        links: PropTypes.array.isRequired,
        news: PropTypes.array.isRequired,
        endHeader: PropTypes.array.isRequired,
        newDate: PropTypes.string.isRequired,
        currency: PropTypes.array.isRequired,
    })
}

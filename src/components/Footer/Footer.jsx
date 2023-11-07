import { FooterUp } from './FooterUp';
import { FooterItem } from './FooterItem';
import { HeaderUp } from '../Header/HeaderUp';
import PropTypes from 'prop-types';

// компонент принимает данные и организует показ Footer 

export const Footer = ({ dataFooter }) => {
    const {
        weatherLinks,
        itemsVisit,
        item,
        item2,
        timetables,
        timetablesTitle,
        ether,
        tvether,
    } = dataFooter;

    return (
        <div className='footer-wrapper'>
            <div className='wrapper-main-item'>
                <FooterUp>
                    <div className='weather-item'>
                        <a className='weather-title'>{weatherLinks.title}</a>
                        <div className='weather-box'>
                            <a href={weatherLinks.href}>
                                <img
                                    src={weatherLinks.img}
                                    alt='Картинка с погодой'
                                    className='weather-img'
                                />
                            </a>
                            <div className='weather-temp'>
                                {weatherLinks.temp}
                            </div>
                            <div className='weather-am-pm'>
                                <div className='weather-morning'>
                                    {weatherLinks.morning}
                                </div>
                                <div className='weather-by-day'>
                                    {weatherLinks.byDay}
                                </div>
                                <div className='weather-by-evening'>
                                    {weatherLinks.byEvening}
                                </div>
                                <div className='weather-night'>
                                    {weatherLinks.byNight}
                                </div>
                            </div>
                        </div>
                    </div>
                </FooterUp>
                <div className='footer-items-box'>
                    <HeaderUp item={item2} />
                    {itemsVisit.map((item) => {
                        return <FooterItem data={item} key={item.title} />;
                    })}
                </div>
            </div>
            <div className='wrapper-main-item'>
                <div className='map'>
                    <HeaderUp item={item} />
                    <a href='#' className='timetable'>
                        Расписания
                    </a>
                </div>
                <div className='item-timetables'>
                    <FooterUp>
                        <div className='timetable-title'>
                            {/* <HeaderUp item={timetablesTitle}/> */}
                            <HeaderUp item={timetablesTitle}>
                                <img
                                    className='timetable-img'
                                    src='https://vivasaninter.com/images/knopka.png'
                                    alt='Картинка с кнопкой'
                                />
                            </HeaderUp>
                        </div>
                        <div className='timetable-news'>
                            {timetables.map((elem) => {
                                return (
                                    <FooterUp key={elem.title}>
                                        <div className='timetable-box'>
                                            <div className='box-time'>
                                                {elem.time}
                                            </div>
                                            <div className='box-title'>
                                                {elem.title}
                                            </div>
                                            <div className='box-content'>
                                                {elem.content}
                                            </div>
                                        </div>
                                    </FooterUp>
                                );
                            })}
                        </div>
                    </FooterUp>
                </div>
            </div>
            <div className='wrapper-main-item'>
                <div className='ether-box'>
                    <HeaderUp item={ether} />
                    {tvether.map((elem) => {
                        return (
                            <FooterUp key={elem.title}>
                                <div className='ether-item'>
                                    <img
                                        className='ether-img'
                                        src='https://w7.pngwing.com/pngs/164/462/png-transparent-windows-media-player-computer-icons-multimedia-reja-blue-photography-sphere.png'
                                        alt=''
                                    />
                                    <div className='ether-title'>
                                        {elem.title}
                                    </div>
                                    <div className='ether-content'>
                                        {elem.chanel}
                                    </div>
                                </div>
                            </FooterUp>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    dataFooter: PropTypes.shape({
        weatherLinks: PropTypes.object.isRequired,
        itemsVisit: PropTypes.array.isRequired,
        item: PropTypes.object.isRequired,
        item2: PropTypes.object.isRequired,
        timetables: PropTypes.array.isRequired,
        timetablesTitle: PropTypes.object.isRequired,
        ether: PropTypes.object.isRequired,
        tvether: PropTypes.array.isRequired,
    }),
};

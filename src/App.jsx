import './App.css';
import { Header } from './components/Header/Header';
import { dataHeader } from './data/dataHeader';
import { Body } from './components/Body/Body';
import { dataBody } from './data/dataBody';
import { dataFooter } from './data/dataFooter';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className='wrapper'>
            <Header data={dataHeader} />
            <Body data={dataBody} />
            <Footer dataFooter={dataFooter} />
        </div>
    );
}

export default App;

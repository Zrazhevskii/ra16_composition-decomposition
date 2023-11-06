import './App.css'
import { Header } from './components/Header/Header'
import { dataHeader } from './data/dataHeader'
import { Body } from './components/Body/Body'
import { dataBody } from './data/dataBody'


function App() {
  // console.log(dataHeader.newDate)
  return (
    <div className='wrapper'>
      <Header data={dataHeader}/>
      <Body data={dataBody}/>
    </div>
  )
}

export default App

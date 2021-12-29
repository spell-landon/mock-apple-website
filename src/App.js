import './App.css';
import { Routes, Route } from 'react-router-dom';
// Components
import Navigation from './components/Navigation/Navigation';
import Blurb from './components/Blurb/Blurb';
import Models from './components/Models/Models';
import Store from './components/Store/Store';
import Mac from './components/Mac/Mac';
import Ipad from './components/Ipad/Ipad';
import Iphone from './components/Iphone/Iphone';
import Watch from './components/Watch/Watch'
import Airpods from './components/Airpods/Airpods'
import TvHome from './components/TvHome/TvHome'
import Services from './components/Services/Services'
import Accessories from './components/Accessories/Accessories'
import Support from './components/Support/Support'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Blurb />
      <Routes>
        <Route index path='/' element={<Models />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/mac' element={<Mac />} />
        <Route path='/ipad' element={<Ipad />} />
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/airpods' element={<Airpods />} />
        <Route path='/tv-home' element={<TvHome />} />
        <Route path='/services' element={<Services />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/support' element={<Support />} />

      </Routes>
    </div>
  );
}

export default App;

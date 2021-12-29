import './App.css';
import { Routes, Route } from 'react-router-dom';
// Components
import Navigation from './components/Navigation/Navigation';
import Blurb from './components/Blurb/Blurb';
import Models from './components/Models/Models';
import Store from './components/Store/Store';
import Mac from './components/Mac/Mac';
import Ipad from './components/Ipad/Ipad';

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
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
// Components
import Navigation from './components/Navigation/Navigation';
import Blurb from './components/Blurb/Blurb';
import Models from './components/Models/Models';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Blurb />
      <Models />
    </div>
  );
}

export default App;

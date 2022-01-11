import './App.css';
import Buttons from './components/buttons';
import Presets from './components/presets';

function App() {
  return (
    <div className="App">
      <Buttons className="glow-on-hover" />,
      <Presets />
    </div>
    
  );
}

export default App;
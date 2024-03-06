import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SecondComponent from './components/secoundcomponent';
import IDOEventComponent from './components/idoevent';
import TokenomicsComponent from './components/token';
import Roadmap from './components/roadmap';

function App() {
  return (
    <div className="App">
      <Header />
      <SecondComponent />
      <IDOEventComponent />
      <TokenomicsComponent />
      <Roadmap />

    </div>
  );
}

export default App;

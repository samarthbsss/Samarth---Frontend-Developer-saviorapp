import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SecondComponent from './components/secoundcomponent';
import IDOEventComponent from './components/idoevent';
import TokenomicsComponent from './components/token';
import Roadmap from './components/roadmap';
import FAQComponent from './components/faq';
import NavbarComponent from './components/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <SecondComponent />
      <IDOEventComponent />
      <TokenomicsComponent />
      <Roadmap />
      <FAQComponent />
      <NavbarComponent />

    </div>
  );
}

export default App;

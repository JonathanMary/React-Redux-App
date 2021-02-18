import './App.css';
import Coins from './components/Coins'




function App() {

  return (
    <div className="App">
      <header>
        <h1>Trending Coins</h1>
      </header>
      <Coins />
      <footer>
        Powered by &copy;Coingecko API
      </footer>
    </div>
  );
}

export default App;

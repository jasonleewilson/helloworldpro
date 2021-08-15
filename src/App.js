import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          HelloWorldPro.com
        </h1>
      </header>

      <footer className="App-footer">
        Created by: 
        <a
          className="App-link"
          href="https://jasonleewilson.com"
          target="_blank"
          rel="noopener noreferrer">
            jasonleewilson.com
        </a>
      </footer>
    </div>
  );
}

export default App;

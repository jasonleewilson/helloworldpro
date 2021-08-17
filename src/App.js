import './App.css';
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HelloWorldPro.com
        </h1>
      </header>
      <div className="container">
        <div className="myform">
          <Form />
        </div>
      </div>
      <footer className="App-footer">
          <a
            className="App-link"
            href="https://github.com/jasonleewilson/helloworldpro"
            target="_blank"
            rel="noopener noreferrer">
              View the code @ gitHub
          </a>
        </footer>
    </div>
  );
}

export default App;

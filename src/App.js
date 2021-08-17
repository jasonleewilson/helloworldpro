import './App.css';

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
          <form action="POST" data-netlify="true">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" name="email" id="email" placeholder="Email" />
            <textarea name="message" id="message" placeholder="Message" />
            <div data-netlify-recaptcha="true"></div>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
      <footer className="App-footer">
          Coded by: &nbsp;
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

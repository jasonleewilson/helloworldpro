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
            <input className="d-block form-control" type="text" name="name" id="name" placeholder="Name" /><br />
            <input className="d-block form-control" type="text" name="email" id="email" placeholder="Email" /><br />
            <textarea className="d-block form-control" name="message" id="message" placeholder="Message" /><br />
            <div data-netlify-recaptcha="true"></div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" value="Send Message">Say Hi!!!</button>
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

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
          {/* <form name="contact" method="POST" netlify netlify-honeypt="bot-field">
            <input className="d-block form-control" type="text" name="name" placeholder="Name" /><br />
            <input className="d-block form-control" type="email" name="email" placeholder="Email" /><br />
            <textarea className="d-block form-control" name="message" placeholder="Message" /><br />
            <input type="hidden" name="form-name" value="contact" />
            <div data-netlify-recaptcha="true"></div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" value="Send Message">Say Hi!!!</button>
          </form> */}
          <Form />
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

import React from "react";

export default function Form() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input className="d-block form-control" type="text" id="name" name="name" placeholder="Name" required />
      </p>
      <p>
        <input className="d-block form-control" type="email" id="email" name="email" placeholder="Email" required />
      </p>
      <p>
        <textarea className="d-block form-control" id="message" name="message" placeholder="Message" required />
      </p>
      <p>
        <button className="w-100 btn btn-lg btn-primary" type="submit" value="Submit Message">Say Hi!!!</button>
      </p>
    </form>
  );
}


<form name="contact" method="POST" netlify netlify-honeypt="bot-field">
            <input className="d-block form-control" type="text" name="name" placeholder="Name" /><br />
            <input className="d-block form-control" type="email" name="email" placeholder="Email" /><br />
            <textarea className="d-block form-control" name="message" placeholder="Message" /><br />
            <input type="hidden" name="form-name" value="contact" />
            <div data-netlify-recaptcha="true"></div>
          </form>
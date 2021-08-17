import React from "react";

export default function Form() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <input className="d-block form-control" type="text" id="name" name="name" aria-label="name" placeholder="Name" required />
      <input className="d-block form-control" type="email" id="email" name="email" aria-label="email" placeholder="Email" required />
      <textarea className="d-block form-control" id="message" name="message" aria-label="message" placeholder="Message" required />
      <button className="w-100 btn btn-lg btn-primary" type="submit" value="Submit Message">Say Hi!!!</button>
    </form>
  );
}
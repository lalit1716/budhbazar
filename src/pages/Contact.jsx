import React from "react";

function Contact() {
  return (
    <div id="contact-container">
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/mbjeddqp" method="POST">
        <p>Write a comment</p>

        <label htmlFor="Name">Name</label>
        <br />
        <input
          type="text"
          name="Name"
          placeholder="Name..."
          required
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <input
          type="email"
          name="Email"
          placeholder="Enter your email address..."
          required
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="phone-number">Phone Number</label>
        <br />
        <input
          type="text"
          name="phone-number"
          number
          placeholder="Enter your phone number..."
          required
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="Message">Message</label>
        <br />
        <textarea
          type="text"
          name="Message"
          spellCheck
          placeholder="Message.."
          required
          autoComplete="off"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

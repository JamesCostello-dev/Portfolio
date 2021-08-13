import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../../utils/index";
// import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
  };

  // const sendEmail = e => {
  // 	e.preventDefault();
  // 	emailjs.sendForm('service_c1s53nk', 'template_qt0e47b', e.target, 'user_idrS1RLZVGAjL0W9AeyBm')
  // 	.then(result => {
  // 	console.log(result);
  // 	}, error => {
  // 	console.log(error.text);
  // 	});
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ name: '', email: '', message: '' });
      console.log("Form", formState);
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <label className="form-text">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="form-text">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="form-text">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-msg">{errorMessage}</p>
          </div>
        )}
        <div>
          <Button type="submit" size="lg">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;

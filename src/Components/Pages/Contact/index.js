import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../../../utils/index";

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
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <Form>
        <div>
          <label className="form-text">Full Name</label>
          <input />
        </div>
        <div>
          <label className="form-text">Email</label>
          <input />
        </div>
        <div>
          <label className="form-text">Message</label>
          <textarea rows="5"></textarea>
        </div>
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

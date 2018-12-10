import React, { Component } from "react";

class Contact extends Component {
  state = {
    formEmailSent: false,
    formSubmitted: false,
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: ""
    }
  };

  handleInputChange = event => {
    const target = event.target;
    this.setState({
      [target.id]: target.value
    });
  };

  handleClearErrors = () => {
    let errors = {
      name: "",
      email: "",
      message: ""
    };
    this.setState({ errors });
  };

  handleFormValidation = () => {
    const { name, email, message } = this.state;
    let errorFound = false;
    let errors = {
      name: "",
      email: "",
      message: ""
    };

    if (name.length === 0) {
      errors.name = "Please enter your name.";
      errorFound = true;
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      errors.email = "Please enter a valid email address";
      errorFound = true;
    }

    if (message.length === 0) {
      errors.message = "The message field cannot be empty";
      errorFound = true;
    }

    this.setState({ errors });
    return errorFound;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleClearErrors();
    const errorFound = this.handleFormValidation();
    if (errorFound) return;

    const { REACT_APP_EMAILJS_TEMPLATEID: template } = process.env;

    this.sendMessage(
      template,
      this.state.name,
      this.state.email,
      this.state.message
    );

    this.setState({
      formSubmitted: true
    });
  };

  sendMessage = (templateId, name, email, message) => {
    window.emailjs
      .send("mailgun", templateId, {
        name,
        email,
        message
      })
      .then(res => {
        this.setState({ formEmailSent: true });
      })

      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  render() {
    const { name, email, message, errors } = this.state;
    return (
      <div className="container">
        <div className="content-container contact">
          <h2>Contact me</h2>

          <form className="contact_form" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <br />
            <label className="error">{errors.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              onChange={this.handleInputChange}
              value={name}
            />
            <label>Email</label>
            <br />
            <label className="error">{errors.email}</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
              onChange={this.handleInputChange}
              value={email}
            />

            <label>Message</label>
            <br />
            <label className="error">{errors.message}</label>
            <textarea
              className="messageArea"
              id="message"
              name="message"
              placeholder="Write something.."
              onChange={this.handleInputChange}
              value={message}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from "react";

class Contact extends Component {
  state = {
    formEmailSent: false,
    formSubmitted: false,
    name: "",
    email: "",
    message: "",
    errors: {
      formSubmit: false,
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
      formSubmit: false,
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
      formSubmit: false,
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
        this.setState({ formEmailSent: true, formSubmitted: false });
        setTimeout(() => {
          this.setState({ formEmailSent: false, formSubmitted: false });
        }, 5000);
      })

      .catch(err => {
        console.error("Failed to send feedback. Error: ", err);
        this.setState({
          formEmailSent: false,
          formSubmitted: false,
          errors: { ...this.state.errors, formSubmit: true }
        });
      });
  };

  render() {
    const {
      name,
      email,
      message,
      errors,
      formSubmitted,
      formEmailSent
    } = this.state;
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
              placeholder="Write something.."
              onChange={this.handleInputChange}
              value={message}
            />

            <button
              type="submit"
              value="Submit"
              className={errors.formSubmit ? "errorBtn" : ""}
            >
              {errors.formSubmit ? "Retry" : "Submit"}
              {formSubmitted && <i class="fa fa-refresh fa-spin" />}
              {formEmailSent && <i class="fa fa-check" />}
              {errors.formSubmit && <i class="fa fa-times" />}
            </button>
          </form>
          <p className="contactText">
            Alternatively, you can contact me at{" "}
            <a href="mailto:madhava.diflorio@gmail.com">
              madhava.diflorio@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;

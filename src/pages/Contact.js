import React, { Component } from "react";

import content_en from "../content/contact/en";
import content_fr from "../content/contact/fr";

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.language !== this.props.language) {
      this.handleClearErrors();
    }
  }

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
    const { language } = this.props;
    const content = language === "EN" ? content_en : content_fr;

    let errorFound = false;
    let errors = {
      formSubmit: false,
      name: "",
      email: "",
      message: ""
    };

    if (name.length === 0) {
      errors.name = content.error_name;
      errorFound = true;
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      errors.email = content.error_email;
      errorFound = true;
    }

    if (message.length === 0) {
      errors.message = content.error_message;
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

    const { language } = this.props;
    const content = language === "EN" ? content_en : content_fr;
    return (
      <div className="container">
        <div className="content-container contact">
          <h2>{content.title}</h2>

          <form className="contact_form" onSubmit={this.handleSubmit}>
            <label>{content.name_title}</label>
            <br />
            <label className="error">{errors.name}</label>
            <input
              type="text"
              id="name"
              placeholder={content.name_placeholder}
              onChange={this.handleInputChange}
              value={name}
            />
            <label>Email</label>
            <br />
            <label className="error">{errors.email}</label>
            <input
              type="text"
              id="email"
              placeholder={content.email_placeholder}
              onChange={this.handleInputChange}
              value={email}
            />

            <label>Message</label>
            <br />
            <label className="error">{errors.message}</label>
            <textarea
              className="messageArea"
              id="message"
              placeholder={content.message_placeholder}
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
            {content.alternative_text}{" "}
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

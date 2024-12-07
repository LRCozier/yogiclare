import {useState} from "react";
import './contactform.css';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset the form (optional)
    setFormData({
      name: "",
      email: "",
      query: "",
    });

    // ADD FORM PROCESSING HERE
  };

  return (
    <>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        {submitted && <p className="success-message">Thank you for your message!</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="query">Query:</label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );

}

export default ContactForm;

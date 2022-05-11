import '../styles/Contact.css';
import Form from '../components/Form.js'

const Contact = () => {
  return (
    <div className="container" >
      <div className="card-form">
          <h1> Contact me</h1>
          <p className="contact-subtitle">I am looking for a job of front end or full stack developer, based in Nantes. If you have question don't hesitate to use the form.</p>
          { <Form/> }
      </div>
      <div className="card-map">
        <div className="map-contact-info">
            <p>Sarah Guillon</p>
            <p>St-Sébastien-Sur-Loire 44230</p>
            <p><span>@</span>: sarah.guillon.11@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

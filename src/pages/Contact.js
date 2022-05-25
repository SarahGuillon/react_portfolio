import '../styles/Contact.css';
import Form from '../components/Form.js'
import Grid from '@material-ui/core/Grid';

const Contact = () => {
  return (
    <div className="contact-content" >
      <Grid container>
        <Grid item xs={0} md={0}></Grid>
        <Grid item xs={12} md={6}>
          <div className="card-form">
              <h1> Contact me</h1>
              <p className="contact-subtitle">I am looking for a job of front end or full stack developer, based in Nantes. If you have question don't hesitate to use the form.</p>
              { <Form/> }
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="card-map">
            <div className="map-contact-info">
                <p>Sarah Guillon</p>
                <p>St-Sébastien-Sur-Loire 44230</p>
                <p>sarah.guillon.11@gmail.com</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;

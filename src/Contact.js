
const Contact = () => {
  return (
    <div className="card">
      <div className="title">
        <h1> Contact me</h1>
      </div>
      <div className="contact-form">
        <p className="contact-subtitle">I am looking for a job of front end or full stack developer, based in Nantes. If you have question don't hesitate to use the form.</p>
        <form>
          <div className="name-email">
            <input
              type="text"
              required
              placeholder="Name"
            />
            <input
              type="text"
              required
              placeholder="Email"
            />
          </div>
          <div className="email-content">
            <input
              type="text"
              required
              placeholder="Subject"
            />
            <textarea
              type="text"
              required
              placeholder="Message"
            />
          </div>
          {/* <button> Send message </button> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;

import emailjs from '@emailjs/browser';

export const Form = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_ab90xuc', e.target, 'WhuYOU8sw5XGtXPyg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="name-email">
        <input
          type="text"
          required
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="email-content">
        <input
          type="text"
          required
          placeholder="Subject"
          name="subject"
        />
        <textarea
          type="text"
          required
          placeholder="Message"
          name="message"
        />
      </div>
      <div className='button-submit'>
        <input type="submit" value="Send message" />
      </div>
    </form>
  );
}

export default Form;

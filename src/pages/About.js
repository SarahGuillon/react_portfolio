import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-content">
      <div className="title">
        <h1> About me</h1>
        <p> { `Open to work :) `}</p>
      </div>
      <text>
        I am Sarah Guillon, 30 years old, located in Nantes. <br></br>
        I am graduated from Neoma Business School and worked 5 years in Financial Controlling. <br></br><br></br>
        In 2022, I started a new challenge, I decided to learn coding and loved it ! <br></br>
        I participated to the intensive 9-week bootcamp organized by <a href="https://www.lewagon.com/fr/nantes" target="_blank" rel="noopener noreferrer">Le Wagon Nantes</a>.<br></br>
        <span>I am currently looking for a job of front end or full stack developer.</span><br></br><br></br>
        Learning continuously,  developing my creativity and working within a team is a great source of motivation for me.
        I am a curious person, social and well-organized. Thanks to my previous experiences, I developed my capacity for rigor, analysis and my autonomy.<br></br><br></br>
        When I'm not learning code, I enjoy doing sports, going out with my friends, travelling, hiking, as well as manual and creative activities : sewing, dried flowers, macramé...<br></br><br></br>
        <span>Interested in my profile ? <Link to="/contact">Contact me</Link></span>
      </text>
    </div>
  );
}

export default About;

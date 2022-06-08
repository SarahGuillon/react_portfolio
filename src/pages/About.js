import { Link } from 'react-router-dom';
import '../styles/About.css';
import photovdef from '../images/photovdef.png';

const About = () => {
  return (
    <div className="about-content">
      <div className="title">
        <h1> About me</h1>
      </div>
      <div className="about-container">
        <div className="about-text">
          <text>
            I am Sarah Guillon, 30 years old, located in Nantes. <br></br>
            I graduated from Neoma Business School and worked 5 years in Financial Controlling. <br></br><br></br>
            In 2022, I started a new challenge, I decided to learn coding and loved it ! <br></br>
            I participated in the intensive 9-week bootcamp organized by <a href="https://www.lewagon.com/fr/nantes" target="_blank" rel="noopener noreferrer">Le Wagon Nantes</a>.<br></br>
            <span>I am currently looking for a front end or full stack developer job.</span><br></br><br></br>
            Learning continuously,  developing my creativity and working within a team is a great source of motivation for me.
            I am a curious, social and well-organized person. Thanks to my previous experiences, I developed my capacity of thoroughness, analysis and autonomy.<br></br><br></br>
            When I'm not learning to code, I enjoy doing sports, going out with my friends, travelling, hiking, as well as doing manual and creative activities (sewing, dried flowers...). I also volunteer in associations like La Croix Rouge and La Ressourcerie de l'Ile, in Rezé.<br></br><br></br>
            <span>Interested in my profile ? <Link to="/contact">Contact me</Link></span>
          </text>
          <p> { `Open to work :) `}</p>
        </div>
        <div className='picture'>
          <img src={photovdef} alt="profil picture" />
        </div>
      </div>
    </div>
  );
}

export default About;

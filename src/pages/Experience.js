import '../styles/Experience.css';
import { faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
  return (
    <div className="experience-content">
      <div className="title">
        <h1> Experience</h1>
      </div>
      <div className="experience-container">
        <div className="experience-card">
            <h3><FontAwesomeIcon icon={faCaretRight}/> Web Application Developer Certification - Level 6</h3>
            <p className="month">April 2022 </p>
        </div>
        <div className="experience-card">
          <h3><FontAwesomeIcon icon={faCaretRight}/> Intensive Bootcamp of 9 weeks <span> @Le Wagon, Nantes</span></h3>
          <p className="month">January - March 2022 </p>
          <ul>
            <li>Creating web applications with Ruby on Rails framework</li>
            <li>Teamwork using Git and Github</li>
            <li>Coding challenges in Ruby, SQL, JS, CSS, HTML</li>
            <li>Creating wireframes with Figma</li>
            <li>Presentation of team projects (pitch)</li>
          </ul>
        </div>
        <div className="experience-card">
          <h3><FontAwesomeIcon icon={faCaretRight}/> Financial Controller <span> @THOM Group, Paris</span></h3>
          <p className="month">October 2018 - July 2022 </p>
          <ul>
            <li>Preparing financial reports</li>
            <li>Analyzing sales evolution and commercial operations performance</li>
            <li>Calculating financial impact of punctuals events (strike, new merchandising, operating loss...)</li>
            <li>Participating in budget process and monthly closings</li>
            <li>Calculating stores monthly business goals</li>
          </ul>
        </div>
        <div className="experience-card">
          <h3><FontAwesomeIcon icon={faCaretRight}/> Financial Controller <span> @Eco-mobilier, Paris</span></h3>
          <p className="month">June 2016 - October 2018 </p>
          <ul>
            <li>Monitoring of operating expenses and CAPEX</li>
            <li>Analyzing operational costs</li>
            <li>Participating in budget process and monthly closings</li>
            <li>Implementing procedure for expenditure commitments</li>
          </ul>
        </div>
        <div className="experience-card">
          <h3><FontAwesomeIcon icon={faCaretRight}/> Master Grande Ecole <span> @Neoma Business School</span></h3>
          <p className="month">September 2011 - December 2016 </p>
          <ul>
            <li>6-month exchange at Turku School of Economics (Finland) </li>
            <li>4 internships of 6 months in Financial Control in different groups</li>
          </ul>
        </div>
        <div className="experience-card">
          <h3><FontAwesomeIcon icon={faCaretRight}/> Economic preparatory classes for the <span> @Aliénor d'Aquitaine, Poitiers</span></h3>
          <p className="month">September 2019 - June 2011 </p>
        </div>
      </div>
    </div>
  )
}

export default Experience;

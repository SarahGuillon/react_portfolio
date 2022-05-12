import '../styles/Skills.css';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <div className="card">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills-details">
        <div className="subtitle">
          <h2>Web </h2>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div class="chart">
          <p>Ruby on Rails</p>
          <footer>
            <div className='filled-60'>60%</div>
            <div className='unfilled-40'>40%</div>
          </footer>
        </div>
        <div class="chart">
          <p>JavaScript</p>
          <footer>
            <div className='filled-50'>50%</div>
            <div className='unfilled-50'>50%</div>
          </footer>
        </div>
        <div class="chart">
          <p>ReactJS</p>
          <footer>
            <div className='filled-50'>50%</div>
            <div className='unfilled-50'>50%</div>
          </footer>
        </div>
        <div class="chart">
          <p>CSS</p>
          <footer>
            <div className='filled-70'>70%</div>
            <div className='unfilled-30'>30%</div>
          </footer>
        </div>
        <div class="chart">
          <p>HTML</p>
          <footer>
            <div className='filled-70'>70%</div>
            <div className='unfilled-30'>30%</div>
          </footer>
        </div>
        <div class="chart">
          <p>Bootstrap</p>
          <footer>
            <div className='filled-50'>50%</div>
            <div className='unfilled-50'>50%</div>
          </footer>
        </div>



      {/* <div>
        <h2>Data</h2>
      </div>
      <div>
        <h2>Project Management</h2>
      </div>
      <div>
  <h2>Soft skills</h2>*/}



      </div>
    </div>
  );
}

export default Skills;

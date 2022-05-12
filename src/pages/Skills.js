import '../styles/Skills.css';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillsList from '../components/SkillsList.js'
import { useState } from 'react';

const Skills = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="card">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <div className="subtitle" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
          <h2> Web </h2>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="skills-list">
          {isActive && <SkillsList/>}
        </div>
      </div>
    </div>
  );
}

export default Skills;

import '../styles/Skills.css';
import SkillsList from '../components/SkillsList.js'
import { useState, useEffect } from 'react';
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {

  const categories = [ "Web", "Project Management", "Data", "Soft Skills" ];
  const [categoryTarget, setCategoryTarget] = useState("web");

  useEffect(() => {
    document.querySelector(".skills-categories .subtitle").classList.add("active");
  },[])

  const handleMouseEnter = (e) => {
    setCategoryTarget(e.target.textContent);
    const allSubtitles = document.querySelectorAll(".skills-categories .subtitle");
    // console.log(allSubtitles);
    allSubtitles.forEach(subtitle => {
      subtitle.classList.remove("active");
    });
    e.target.classList.add("active");
        // console.log(allSubtitles);
  }

    return (
    <div className="card-skills">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="skills-categories">
          { categories.map(category => (
            <div className="subtitle" onMouseEnter={(e) => handleMouseEnter(e)} key={categories.indexOf(category)}>
              <h2>{category}</h2>
            </div>
          )) }
        </div>
        {<SkillsList skillCategory={categoryTarget}/>}
      </div>
    </div>
  );
}

export default Skills;

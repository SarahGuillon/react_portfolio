import '../styles/Skills.css';
import SkillsList from '../components/SkillsList.js'
// import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {

  const categories = [ "Web", "Soft Skills",  "Project Management", "Data"];
  // const [categoryTarget, setCategoryTarget] = useState("");
  // const [displayList, setDisplayList] = useState(false)

  // useEffect(() => {
  //   document.querySelector(".skills-categories .subtitle h2").classList.add("active");
  //   setCategoryTarget("Web");
  //   setDisplayList(true);
  // },[])

  // const handleClick = (e) => {
  //   const allSubtitles = document.querySelectorAll(".skills-categories .subtitle h2");
  //   allSubtitles.forEach(subtitle => {
  //     subtitle.classList.remove("active");
  //   });
  //   setCategoryTarget(e.target.textContent);
  //   e.target.classList.add("active");
  //   console.log(e);
  //   setDisplayList(true);
  // }

    return (
    <div className="skills-content">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <Grid container className="skills-container">
        { categories.map(category => (
          <Grid item xs={12} md={6}>
            <div className="skills-category">
              <div className="subtitle" key={categories.indexOf(category)}>
                <h2>{category}</h2>
              </div>
              <div className="skills-list">{<SkillsList skillCategory={category}/>}</div>
            </div>
          </Grid>
        )) }
      </Grid>
    </div>
  );
}

export default Skills;

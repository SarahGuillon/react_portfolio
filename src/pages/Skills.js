import '../styles/Skills.css';
import SkillsList from '../components/SkillsList.js'
import Grid from '@material-ui/core/Grid';

const Skills = () => {

  const categories = [ "Web", "Soft Skills",  "Project Management", "Data"];

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

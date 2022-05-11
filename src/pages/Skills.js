import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="card">
      <div className="title">
        <h1> Skills</h1>
      </div>
      <div className="skills-details">
        <h2>Web</h2>
        <div class="chart">
          <span>Ruby on Rails</span>
          <footer>
            <div className='fulfill'>60%</div>
            <div className='empty'>40%</div>
          </footer>
        </div>
          <div class="chart">
          <span>CSS</span>
          <footer>
            <div className='fulfill'>60%</div>
            <div className='empty'>40%</div>
          </footer>
        </div>
          <div class="chart">
          <span>Html</span>
          <footer>
            <div className='fulfill'>60%</div>
            <div className='empty'>40%</div>
          </footer>
        </div>
        {/* <p>Ruby on Rails</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JS</p>
      </div>
      <div>
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

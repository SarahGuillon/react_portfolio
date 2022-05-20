import { Link } from "react-router-dom";
import '../styles/Home.css';
// import photo from './photo.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="left-box">
          <p className="presentation"> <span>Hello, </span>I'm Sarah,<br></br> web developer</p>
          <p className="detail"> Front End / Full Stack Developer </p>
          <div className="contact"><Link to="/contact"> Contact me</Link></div>
        </div>
        <div className="right-box">
          {/* <img src={' '} alt="profile picture"/> */}
        </div>
      </div>
    </div>
  )
}

export default Home;

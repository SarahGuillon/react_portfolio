import { Link } from "react-router-dom";
import '../styles/Home.css';
// import profilpicturePhotoRoom from '../images/profilpicturePhotoRoom.png';

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-container">
        <div className="left-card">
          <p className="presentation"> <span>Hello, </span>I'm Sarah,<br></br> web developer</p>
          <p className="detail"> Front End / Full Stack Developer </p>
          <div className="contact"><Link to="/contact"> Contact me</Link></div>
        </div>
        {/* <img src={profilpicturePhotoRoom} alt="profil picture" /> */}
      </div>
    </div>
  )
}

export default Home;

import { Link } from "react-router-dom";
// import photo from './photo.png';

const Home = () => {
  return (
    <div className="home">
      <div className="left-box">
        <p className="presentation"> <span>Hello, </span>I'm Sarah,<br></br> web developer</p>
        <p className="detail"> Front End / Full Stack Developer </p>
        <div className="contact"><Link to=""> Contact me</Link></div>
      </div>
      <div className="right-box">
        {/* <img src={' '} alt="profile picture"/> */}
      </div>
    </div>

  )
}

export default Home;

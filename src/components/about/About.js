import { ClassNames } from "@emotion/react";
import "./About.css";
import imageurl from './logesh.jpg';
function About() {
  return (
    <>
      <div className="container" id="about">
        <div className="text-content">
          <h1>Hi, I am </h1>
          <h1>LOGEHKUMAR M</h1>
          <p>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
        </div>
        <div className="image">
        <img src={imageurl} alt="Circular" className="imagee"  />

        </div>
      </div>
    </>
  );
}
export default About;

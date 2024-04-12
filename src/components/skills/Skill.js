import About from "../about/About";
import "./skill.css";
function Skill() {
  return (
    <div className="skill" id="skill">
      <h1 className="skill-header">SKILLS</h1>
      <p>
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="skill-type12">
        <div className="skill-type1">
          <h3 className="skill-name">FRONTEND</h3>
          <div className="allskills">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JAVA-SCRIPT</h4>
            <h4>REACT.JS</h4>
            <h4>MATERIAL-UI</h4>
            
          </div>
        </div>
        <div className="skill-type2">
          <h3 className="skill-name">BACKEND</h3>
          <div className="allskills">
            <h4>JAVA</h4>
            <h4>C++</h4>
            <h4>DATA STRUCTURES</h4>
            <h4>MYSQL</h4>
            <h4>SPRINGBOOT</h4>
          </div>
        </div>
      </div>
      <div className="skill-type3">
          <h3 className="skill-name-other">OTHER</h3>
              <div className="allskills-other">
                <h4>VSCODE</h4>
                <h4>GITHUB</h4>
                <h4>POSTMAN</h4>
               
              </div>
              <div className="allskills-other">
                
                <h4>MANUAL TESTING</h4>
                <h4>SELENIUM</h4>
              </div>
              <div className="allskills-other">
                
                <h4>AWS</h4>
                
              </div>


      </div>
    </div>
  );
}
export default Skill;

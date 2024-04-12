import './App.css';
import Navbar from '../../portfolio_logesh/src/components/navbar/Navbar';
import About from '../../portfolio_logesh/src/components/about/About';
import Skill from '../../portfolio_logesh/src/components/skills/Skill';
import Project from '../../portfolio_logesh/src/components/project/Project';

// import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <About></About>
          <Skill></Skill>
          <Project></Project>

    </div>
  );
}

export default App;

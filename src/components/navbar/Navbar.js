// navbar.js
import './Navbar.css';
import {Button} from "@mui/material";
import {NavLink} from 'react-router-dom';
import Project from './../project/Project';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className='heading'>

                <h4>PORTFOLIO</h4>
            </div>
            <div className="navitems-wrapper">
                <ul className="navitems">
                <li><a href='#about'>About</a></li>
                <li><a href='#skill'>Skill</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#about'>Contact</a></li>
                
                </ul>
            </div>
            

                <Button href="https://github.com/Logeshkumar007" variant='outlined' sx={{color: 'white',
                borderColor:'rgb(0, 234, 255)' ,ml:'30%' }}>Github </Button>
            
        </div>
    );
}

export default Navbar; // Only one default export

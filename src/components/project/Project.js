import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import lk from "./logeshh.jpg";
import portfolio from "./Portfolio.jpg";
import pharmacine from "./Pharmacine.jpg";
import todolist from "./todolist.png";
import quiz from "./quizomania.png";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import  './Project.css';
function Project() {
  return (
    <>
      <div id="project" className="project-container">
        <div className="project-heading">
        <h1>Project</h1>

        </div>
        <div className="cards">

        <Card sx={{ maxWidth: 350 , mr:15,height: 310,bgcolor:" rgba(2, 0, 5, 0.34)",color:"white"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image={pharmacine}
            
            />
          <CardContent sx={{color:"white"}}>
            <Typography sx={{color:"white"}} gutterBottom variant="h6" component="div">
              Pharmacine
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"rgba(255, 255, 255, 0.393)"}}>
              A Pharmacy management simple React project with dynamic registration and login pages
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://github.com/Logeshkumar007/Pharmicine-project">Github</Button>
            
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 ,height: 310,bgcolor:" rgba(2, 0, 5, 0.34)",color:"white"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image={portfolio}
            />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"rgba(255, 255, 255, 0.393)"}}>
                    A PortFolio project made with react.js and material ui with good UI
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Github</Button>
            
          </CardActions>
        </Card>
            </div>
        <div className="cards">

        <Card sx={{ maxWidth: 350 , mr:15,height: 310,bgcolor:" rgba(2, 0, 5, 0.34)",color:"white"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image={quiz}
            
            />
          <CardContent sx={{color:"white"}}>
            <Typography sx={{color:"white"}} gutterBottom variant="h6" component="div">
              Quiz O Mania
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"rgba(255, 255, 255, 0.393)"}}>
              A Quiz app made with React.js and springboot.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://github.com/Logeshkumar007/Pharmicine-project">Github</Button>
            
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 ,height: 310,bgcolor:" rgba(2, 0, 5, 0.34)",color:"white"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image={todolist}
            />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              TO DO List
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"rgba(255, 255, 255, 0.393)"}}>
                    A simple To do app made of html css and javascript with a attractive user-interface.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://github.com/Logeshkumar007/TO-DO-LISY">Github</Button>
            
          </CardActions>
        </Card>
            </div>
      </div>
    </>
  );
}
export default Project;

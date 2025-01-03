// import "./Project.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="allprojects">
      <div className="project">
        <Link to="counter">Counter</Link>
      </div>
      <div className="project">
        <Link to="tailwindprops">TailwindProps</Link>
      </div>
      <div className="project">
        <Link to="themecontext">ThemeContext</Link>
      </div>
      <div className="project">
        <Link to="cartcontext">CartContext</Link>
      </div>
      <div className="project">
        <Link to="fetchapi">Fetch API</Link>
      </div>

      <div className="project">
        <Link to="callingfetchapi">Calling Fetch API Data</Link>
      </div>
    </div>
  );
}

export default Projects;

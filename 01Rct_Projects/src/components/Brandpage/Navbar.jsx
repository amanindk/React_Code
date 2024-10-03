import digitalsollogo from "../Brandpage/digitalsollogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src={digitalsollogo}
            style={{ width: "70px", height: "auto" }}
            alt=""
          />
        </div>
        {/* <div className="menu"> */}
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        {/* </div> */}
        <div className="navbtn">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

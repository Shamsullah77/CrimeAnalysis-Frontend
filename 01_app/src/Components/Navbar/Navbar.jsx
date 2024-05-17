import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from"../../assets/Simple_logo.png"

const Navbar = () => {
  return (
    <section className="nav">
       <img src={logo} alt="btn" className="nav-logo" />
      {/* <div >CAPS</div> */}
      <ul className="nav-menu">
        <li ><Link to="/" className="Links">Home</Link></li>
        <li><Link to="/Crime_Info" className="Links">Crime</Link></li>
        <li><Link to="/Crime_Analysis" className="Links">Crime_Analysis</Link> </li>
        <li><Link to="/Crime_Predict" className="Links">Prediction</Link></li>
        <li><Link to="/AboutUs" className="Links">About</Link></li>
        <li className="Links">Contact</li>
        <li className="nav-contact"><Link to="/SignIn">Sign in</Link></li>
        <li className="nav-contact"><Link to="/SignUp">Sign up</Link></li>
        <li className="nav-contact">Language</li>

      </ul>
    </section>
  );
};
export default Navbar;

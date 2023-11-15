import { CiSearch } from "react-icons/ci";
import "./style.css";

function Navbar() {
  return (
    <div className="Nav-Containaire">
      <h1 className="Nav-Logo1">
        GlobaL <span className="Nav-Logo">Logistic</span>
      </h1>
      <ul className="Nav-Description">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>BLOG</li>
        <li>CLIENTS</li>
        <li>CONTACTS</li>
        <li className="Request-Rate">REQUEST A RATE</li>
        <li>
          {" "}
          <CiSearch size={30} />{" "}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

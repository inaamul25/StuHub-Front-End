import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./images/StuHubLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const value = props.page;
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("profileImage");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="logo1">
          <img src={logo} alt="" />
        </div>
        <div className="navigation">
          <div id="menu-btn">
            <div className="menu-dash" onClick={toggleMobileMenu}>
              ☰
            </div>
          </div>
          <i
            id="menu-close"
            className="fas fa-times"
            onClick={closeMobileMenu}
          ></i>
          <ul className={isMobileMenuOpen ? "active" : ""}>
            {isMobileMenuOpen && (
              <li className="close-button">
                <button onClick={closeMobileMenu}>X</button>
              </li>
            )}
            {value === "home" ? (
              <li className={value === "home" ? "active-home" : ""}>
                <Link to={"/"}>Home</Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            )}
            {value === "courses" ? (
              <li className={value === "courses" ? "active-courses" : ""}>
                <Link to={"/courses"}>Courses</Link>
              </li>
            ) : (
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
            )}
            {authToken ? (
              value === "profile" ? (
                <li style={{ backgroundColor: "purple", borderRadius: "5px" }}>
                  <Link
                    to={"/profile"}
                    style={{ color: "white", padding: "10px" }}
                  >
                    Profile
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to={"/profile"}>
                    Profile
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              )
            ) : (
              <></>
            )}
            {authToken ? (
              value === "learnings" ? (
                <li style={{ backgroundColor: "purple", borderRadius: "5px" }}>
                  <Link
                    to={"/learnings"}
                    style={{ color: "white", padding: "10px" }}
                  >
                    Learnings
                    <FontAwesomeIcon icon={faChalkboardUser} />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to={"/learnings"}>
                    Learnings
                    <FontAwesomeIcon icon={faChalkboardUser} />
                  </Link>
                </li>
              )
            ) : (
              <></>
            )}
            {/* New Policy Links */}
            {value === "contact-us" ? (
              <li className={value === "contact-us" ? "active-policy" : ""}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            ) : (
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            )}
            {value === "terms" ? (
              <li className={value === "terms" ? "active-policy" : ""}>
                <Link to="/terms">Terms</Link>
              </li>
            ) : (
              <li>
                <Link to="/terms">Terms</Link>
              </li>
            )}
            {value === "refunds" ? (
              <li className={value === "refunds" ? "active-policy" : ""}>
                <Link to="/refunds">Refunds</Link>
              </li>
            ) : (
              <li>
                <Link to="/refunds">Refunds</Link>
              </li>
            )}
            {value === "privacy" ? (
              <li className={value === "privacy" ? "active-policy" : ""}>
                <Link to="/privacy">Privacy</Link>
              </li>
            ) : (
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
            )}
            {authToken !== null ? (
              <li>
                <button onClick={handleLogOut} className="sign-out-button">
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => navigate("/login")}>Login/SignUp</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
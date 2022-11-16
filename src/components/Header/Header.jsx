import React, { useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useGlobalContext, useGlobalIndex } from "../../context";
import "./header.css";
import Context from "../../context";

const navLinks = [
  // {
  //   display: "Accueil",
  //   url: "#",
  // },
  {
    display: "À propos",
    url: "#aboutus",
  },

  // {
  //   display: "Courses",
  //   url: "ListeCours",
  // },
  {
    display: "Pourquoi I-Learn?",
    url: "#chouseus",
  },
];

const Header = () => {
  const context = useGlobalContext();
  const menuRef = useRef();
  const navigate = useNavigate();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-book-3-fill" style={{ color: "blue" }}></i> I-Learn
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                <li className="nav__item">
                  <Link to="/">
                    <a>Accueil</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    to={context.user.id ? "/StudentCourses" : "/ListeCours"}
                  >
                    <a>Courses</a>
                  </Link>
                </li>
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                {!context.user.id ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    S'authentifier
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      context.setUser({ id: 0 });
                      navigate("/");
                    }}
                  >
                    Se déconnecter
                  </button>
                )}
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

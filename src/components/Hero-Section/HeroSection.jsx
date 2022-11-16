import React, { useContext, createContext, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import { useGlobalContext, useGlobalIndex } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

const UserContext = createContext();

const HeroSection = () => {
  const context = useGlobalContext();
  const menuRef = useRef();
  const navigate = useNavigate();
  const user = useContext(UserContext);
  console.log(user);
  const { id } = useParams();
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Découvrez <br /> Les cours de I-Learn <br /> Et excellez!
              </h2>
              <p className="mb-5">
                Apprenez où vous voulez et quand vous voulez! <br />
                Sur votre tablette, smartphone ou pc, <br />
                assistez à des cours de qualité et maitrisez les domaines qui
                vous interessent.
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>  */}
          </Col>

          <Col lg="6" md="6">
            <br />
            <br />
            <br />
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="centered-button">
          <p className="mb-0 d-flex align-items-center gap-2">
            {!context.user.id ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/registration");
                }}
              >
                Inscription
              </button>
            ) : (
              <br />
            )}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

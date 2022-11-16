import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__content">
              <h2>À propos</h2>
              <p>
                L'apprentissage est la source du progrès humain. Il a le pouvoir
                de transformer notre monde de la maladie à la santé, de la
                pauvreté à la prospérité, du conflit à la paix. Il a le pouvoir
                de transformer nos vies pour nous-mêmes, pour nos familles, pour
                nos communautés. Peu importe qui nous sommes ou où nous sommes,
                apprendre nous permet de changer et de grandir et redéfinir ce
                qui est possible. C'est pourquoi l'accès au meilleur
                apprentissage est un droit, pas un privilège. Et c'est pourquoi
                I-Learn est là. Nous collaborons avec les meilleures
                institutions apporter le meilleur apprentissage à tous les coins
                du monde.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;

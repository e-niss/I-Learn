import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section id="chouseus">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=DekAMet0qA8"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Pourquoi I-Learn</h2>
              <p>
                On travaille avec les meilleures universités et organisations
                pour faciliter les cours en ligne. I-Learn propose une variété
                de plans de paiement, allant de la gratuité complète au paiement
                d'un cours individuel ou via un abonnement mensuel ou annuel.
                Ses cours sont flexibles, abordables, pertinents pour l'emploi
                et reconnus par les futurs employeurs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;

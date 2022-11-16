import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = ({ inputHandler }) => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Trouver le cours que vous cherchez</h2>
            <div className="subscribe">
              <input
                type="text"
                placeholder="Chercher Cours"
                onChange={inputHandler}
              />
              <button className="btn-chi-le3ba">
                Search<i class="bx:search" style={{ color: "blue" }}></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;

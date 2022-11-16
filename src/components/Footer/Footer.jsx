import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "À propos",
    url: "#aboutus",
  },

  {
    display: "Courses",
    url: "#courses",
  },

  {
    display: "Pourquoi I-Learn?",
    url: "#chouseus",
  },
];

const footerInfoLinks = [
  {
    display: "Politique de confidentialité",
    url: "#",
  },
  {
    display: "Adhésion",
    url: "#",
  },

  {
    display: "Guide des achats",
    url: "#",
  },

  {
    display: "Conditions d'utilisation",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-book-3-fill" style={{ color: "blue" }}></i> I-Learn
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line" style={{ color: "blue" }}></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line" style={{ color: "blue" }}></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line" style={{ color: "blue" }}></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line" style={{ color: "blue" }}></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explorer</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Informations</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Contacter nous</h6>

            <p>Addresse: Marrakech, Maroc</p>
            <p> Phone: +212 623456789 </p>
            <p>Email: Contact@ilearn.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

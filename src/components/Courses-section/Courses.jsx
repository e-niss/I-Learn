import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const fetchData = () => {
    return fetch("http://localhost:8081/cours/allCours")
      .then((response) => response.json())
      .then((data) => setBooks(data.filter((item) => item.coursId < 4)));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(books);
  return (
    <section id="courses">
      <Container>
        <div className="course__top d-flex justify-content-between align-items-center">
          <div className="course__top__left w-50">
            <h2>Our Popular Courses</h2>
            <p>
              Une séléction de cours enrichie et qui touche plusieurs domaines.
              Sur I-Learn vous trouverez sûrement ce que vous cherchez!
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg="12" className="mb-5"></Col>
          {books.map((item) => (
            <Col lg="4" md="6" sm="6">
              {/* <CourseCard key={item.coursId} item={item} /> */}
              <div className="single__course__item">
                <div className="course__img">
                  <img src={item.imageUrl} alt="" className="w-100" />
                </div>

                <div className="course__details">
                  <h6 className="course__title mb-4">{item.nom}</h6>

                  <div className=" d-flex justify-content-between align-items-center">
                    <p>{item.description}</p>

                    <p
                      className="enroll d-flex align-items-center gap-1"
                      style={{ textAlign: "center" }}
                    >
                      <a href="#"> Enroll Now</a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <div className="w-50 text-end">
          <p className="">
            <button className="btn" onClick={() => navigate("/ListeCours")}>
              See All
            </button>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Courses;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useGlobalContext } from "../../context";
import Newsletter from "../Newsletter/Newsletter";
import { Link } from "react-router-dom";

const ListeCours = () => {
  const [books, setBooks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const context = useGlobalContext();
  console.log(context.user.id);
  const fetchData = () => {
    fetch("http://localhost:8081/cours/allCours")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setBooks(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(books);
  let inputHandler = (e) => {
    // console.log(e.target.value);
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };

  useEffect(() => {
    setData(
      books.filter((book) => {
        if (inputText === "") {
          return book;
        }
        // console.log(book.name.toLowerCase());
        // console.log(inputText)
        return book.nom.toLowerCase().includes(inputText);
      })
    );
    console.log(books);
  }, [inputText]);
  return (
    <section id="courses">
      <Newsletter inputHandler={inputHandler} />
      <Container>
        <Row>
          <Col lg="12" className="mb-5"></Col>
          {data.map((item) => (
            <Col lg="4" md="6" sm="6">
              {/* <CourseCard key={item.coursId} item={item} /> */}
              <Link to={`/Cours/${item.coursId}`}>
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
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ListeCours;

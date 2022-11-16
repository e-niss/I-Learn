import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "./cours.css";

const Cours = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  const [postId, setPostId] = useState(null);
  const context = useGlobalContext();
  let id_etd = context.user.id > 0 && context.user.id;
  const url = `http://localhost:8081/cours/${id}`;
  console.log(url);

  async function getBook() {
    const res = await fetch(url);
    const data = await res.json();
    setBook(data);
  }

  useEffect(() => {
    getBook();
  }, []);
  useEffect(() => {
    book && console.log(book);
  }, [book]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(id_etd);
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: id_etd,
        courseId: id,
      }),
    };

    fetch("http://localhost:8083/inscriptions/addInscription", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id))
      .catch((err) => {
        console.debug("Error in fetch", err);
      });
    alert("Inscription avec succes ");
    navigate("/");
  };
  return (
    <div className="cont-course">
      <div className="cont-image">
        <img src={book.imageUrl} className="img1" alt="Card image cap" />
      </div>
      <div className="cont-detail">
        <h5>{book[`nom`]}</h5>
        <p>{book[`description`]}</p>
        <p>{book[`nomEnseignant`]}</p>
        <p>nombre d'heures : {book[`nombreHeures`]}</p>
        <Button className="btnin" onClick={handleClick}>
          enroll
        </Button>
      </div>
    </div>
  );
};

export default Cours;

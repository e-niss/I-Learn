import React from "react";

const CourseCard = (props) => {
  const { coursId, imageUrl, nom, lesson, description, students, rating } =
    props;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imageUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{nom}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p>{description}</p>

          <p
            className="enroll d-flex align-items-center gap-1"
            style={{ textAlign: "center" }}
          >
            <a href="#"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

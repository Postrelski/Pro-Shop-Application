import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import React from "react";

const Rating = ({ value, text }) => {
  // creating the star rating system, bascially there are just 3 types of start (full, half & empty) and there are 5 stars next to each other. depending on the value we send different star types will be chosen. We have the text (num reviers) at the end.
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      {/* "{text && text}" this means if text is truthy, then display text, so if there ARE reviews display the number of reviews */}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;

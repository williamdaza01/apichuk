/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ text }) => {
  return (
    <div className="card">
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;

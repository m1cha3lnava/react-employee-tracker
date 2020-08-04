import React from "react";
import "./Card.css";

const Card = ({
  image,
  id,
  firstName,
  lastName,
  city,
  country,
  email,
  phone,
}) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={id} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {firstName} {lastName}
          </li>
          <li>
            <strong>Location:</strong> {city}, {country}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

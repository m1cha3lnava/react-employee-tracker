import React from "react";
import "./Card.css";

const Card = ({key, image, id, firstName, lastName, location, email, phone}) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={firstName} src={image} />
      </div>
      <div className="content">
        <ul>
        <li>
            <strong>ID:</strong> {id}
          </li>
          <li>
            <strong>First Name:</strong> {firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {lastName}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

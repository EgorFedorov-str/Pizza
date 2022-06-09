import React from "react";

const Reviews = ({ reviews }) => (
  <dl>
    {reviews.map(({ id, user, text }) => (
      <React.Fragment key={id}>
        <dt>{user}</dt>
        <dd>{text}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export default Reviews;

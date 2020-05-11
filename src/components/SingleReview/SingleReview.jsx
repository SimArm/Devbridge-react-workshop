import React from "react";

import "./SingleReview.scss";

const SingleReview = ({
  content,
  preview
}) => {
  const classes = `
      single-review
      ${preview && "single-review-preview"}
  `;
  return <div className={classes}>{content}</div>;
};

export default SingleReview;

import React from "react";
import {useContext} from 'react';
import FeedbackContext  from "../context/FeedbackContext";

function FeedbackStats() {


  const {feedback}=useContext(FeedbackContext)



  let rating =
    feedback.reduce(
      (total, currentValue) => (total = total + currentValue.rating),
      0
    ) / feedback.length;

    rating=rating.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Avare rating {isNaN(rating) ? 0 : rating}</h4>
    </div>
  );
}

export default FeedbackStats;

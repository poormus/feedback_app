import React from "react";
import { useState,useContext,useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [ratingText, setRatingText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  
  const [buttonText,setButtonText]=useState('Send')
  
  const {handleAdd,feedbackEdit,updateFeedback}=useContext(FeedbackContext);

  const handleOnRatingChange = (e) => {
    if(ratingText===''){
        setMessage('')
        setButtonDisabled(true)
    }else if(ratingText!=='' && ratingText.trim().length<10){
        setMessage('Text must be longer than 10 characters')
        setButtonDisabled(true)
    }else{
        setMessage('')
        setButtonDisabled(false)
    }
    setRatingText(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(ratingText.trim().length>10){
       const newFeedback={
        text: ratingText,
        rating:rating
       }
    
       if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
       }else{
        handleAdd(newFeedback)
       }
       
       setMessage('')
       setButtonDisabled(true)
       setRatingText('')
       setButtonText('Send')
       //console.log(newFeedback)
       
    }
  }

  useEffect(()=>{
     if(feedbackEdit.edit===true){
      setRatingText(feedbackEdit.item.text)
      setButtonDisabled(false)
      setRating(feedbackEdit.item.rating)
      setButtonText('Update')
     }
  },[feedbackEdit])

  

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input className="rating-text-input"
            onChange={handleOnRatingChange}
            type="text"
            placeholder="Write a review"
            value={ratingText}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            {buttonText}
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;

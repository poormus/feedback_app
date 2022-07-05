import React from "react";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {useContext} from 'react';
import FeedbackContext  from "../context/FeedbackContext";


function FeedbackList() {


const {feedback}=useContext(FeedbackContext)


  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
            <FeedBackItem
              key={item.id}
              item={item}
              
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
  //no animation
  // return <div className="feedback-list">
  //   {feedback.map((item)=><FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>)}
  // </div>;
}



// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;

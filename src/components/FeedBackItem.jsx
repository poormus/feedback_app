
import {FaTimes,FaEdit} from 'react-icons/fa'
import React from 'react'
//import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

//_rfce
//impt

function FeedBackItem({item}) {
//const [rating,setRating]=useState(7);
//const [text,setText]=useState('this text is set via use state');
 
  const {handleDelete,editFeedback} =useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>handleDelete(item.id)}>
        <FaTimes  color='purple'/>
      </button>
      <button className="edit" onClick={()=>{editFeedback(item)}}>
        <FaEdit  color='green'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes={
  item:PropTypes.object.isRequired
}

export default FeedBackItem

import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{

   const [feedback,setFeedback]=useState([{
    id:'1',
    text:'this is from context',
    rating:10
   }]);

   const [feedbackEdit,setFeedbackEdit]=useState({
    item:{},
    edit:false
   })

   const editFeedback=(item)=>{
    setFeedbackEdit(
        {item,
        edit: true}
    )
   }

   const handleDelete = (id) => {
    if(feedbackEdit.edit===true){
        window.confirm('please complete update')
        return;
    }
    if (window.confirm("are you sure")) {
      setFeedback(feedback.filter((item) => item.id !== id));
      console.log(id);
      feedbackEdit.edit=false
    }
  };
  
  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback=(id,updItem)=>{
    setFeedback(feedback.map((item)=>(item.id===id ? {...item,...updItem}:item)))
    feedbackEdit.edit=false
  }


  return <FeedbackContext.Provider value={{feedback,handleDelete,handleAdd,editFeedback,feedbackEdit,updateFeedback}}>
   {children}
  </FeedbackContext.Provider>
  //hello

}

export default FeedbackContext;
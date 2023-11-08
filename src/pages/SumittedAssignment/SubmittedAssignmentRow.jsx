import { Toaster } from "react-hot-toast";
import useAuth from "../../components/hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubmittedAssignmentRow = ({item}) => {
  const {date,_id,email,link,marks,name,note,status,title} =item;
   
  const [marked,setMarked] =useState(item)
 

  // console.log(item);

  const {user} = useAuth()
  const submitId =_id;

  const markedEmail =user?.email;
  const markedName =user?.displayName

   const handleMarked=(e)=>{
    
    e.preventDefault()
    const form = e.target;
    const status = 'completed'
    const givenNumber =form.number.value;
    const feedback =form.feedback.value;

    const markedAssignment={submitId,markedEmail,markedName,status,givenNumber,feedback}
    console.log(markedAssignment);

    axios.post('http://localhost:5000/markedassignment', markedAssignment, {
  headers: {
    'Content-Type': 'application/json'
  }
   })
  .then(response => {
  console.log(response.data);
  if(response.data.insertedId){
    toast.success('Successfully assignment marked');
    
    
    form.reset()
     }

   })
  .catch(error => {
  console.error(error);
    });
   
    

  }

  return (
    

    <tr>
        
        <td className="bg-custom-color font-bold text-center">
          {title}
        </td>
        <td className="bg-slate-200 font-bold text-center">
         {marks}
        </td>
        <td className="bg-custom-color font-bold text-center">{name}</td>
        <td className="bg-slate-200 font-bold text-center">{status}</td>
        <th className="bg-blue-200 font-bold text-center">
    <Link to={`/marked/${_id}`}>
    <button className="btn bg-custom-color">Give Mark</button>
    </Link>
</th>
      </tr>
  );
};

export default SubmittedAssignmentRow;

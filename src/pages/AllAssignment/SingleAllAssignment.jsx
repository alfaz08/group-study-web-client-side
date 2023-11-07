/* eslint-disable react/prop-types */

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



const SingleAllAssignment = ({assignment,currentUserEmail,newAssignmentList,setNewAssignmentList}) => {
 
  const { _id,title,photo,des,type,marks,date,userEmail}=assignment;
  const currentEmail =currentUserEmail;
  // console.log(newAssignmentList);
  
  const navigate =useNavigate()

   
    const handleDelete=(id,email,currentEmail)=>{
      // console.log(id,email,currentEmail);
  
      if(email===currentEmail){
           axios.delete(`http://localhost:5000/allassignment/${_id}`)
    .then(response => {
      console.log(response.data);
      if (response.data.deletedCount > 0) {
        toast.success('Successfully Deleted Data');
        const remaining = newAssignmentList.filter(item=>item._id!==id)
        setNewAssignmentList(remaining)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    }
      else{
        toast.error('You Can not able to delete another assignment');
      }

   
      


  

    }

    const errorShow=(currentEmail,userEmail)=>{
      if(currentEmail&&userEmail){
        toast.error('you will not able to update others assignment')
      }
      else{
        // toast.error('please Login in')
        navigate('/login')
      }
     
    }

   

  return (
    <div>
      <div className="card bg-custom-color shadow-xl">
  <figure><img className=" w-full h-52" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{type}</div>
    </h2>
    <p>{des}</p>
    <p className="font-bold">Marks: {marks}</p>
    <p className="font-bold">Due Date: {date}</p>
    <div className="card-actions justify-center">
      
   
      
      <Link to={`/details/${_id}`}>
      <button className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">Show Details</button>
      </Link> 

    {
      currentEmail === userEmail ?
     <Link to={`/update/${_id}`}>
      <button className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">Update </button>
      </Link>
      
      :
      // <Link to={`/allassignment/${_id}`}>
      // <button  className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">Update </button>
      // </Link>
      <button onClick={()=>errorShow(currentEmail,userEmail)} className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">Update </button>
    }




      


       {
        currentEmail && <button 
        onClick={()=>handleDelete(_id,userEmail,currentEmail)} 
        className=" text-black btn border-black bg-custom-color
         hover:bg-black hover:text-white">Delete</button>
       }
      

    </div>
  </div>
</div>
<Toaster/>
    </div>
  );
};

export default  SingleAllAssignment;
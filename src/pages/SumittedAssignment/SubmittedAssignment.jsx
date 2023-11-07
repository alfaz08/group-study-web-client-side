import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentRow from "./SubmittedAssignmentRow";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../components/hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const SubmittedAssignment = () => {
  const allData=useLoaderData()
  const [allMarked,setAllMarked]= useState(allData)
  console.log(allMarked);

  const [marked,setMarked] =useState([])
 

  // console.log(item);

  const {user} = useAuth()
  

  const markedEmail =user?.email;
  const markedName =user?.displayName

//update
const handleUpdate=(id)=>{
  fetch(`http://localhost:5000/submitassignment/${id}`,{
    method:'PATCH',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({status: 'completed'})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
      //update state
      console.log('update successful');
    }
  })
}


   const handleMarked=(e,id)=>{
    const submitId=id;
   console.log(submitId);
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
    console.log('data added');
    toast.success('Successfully assignment marked');
    const remaining =allMarked.filter(item=>item._id!==id)
    setAllMarked(remaining)
    form.reset()
     }

   })
  .catch(error => {
  console.error(error);
    });
   
    

  }



  
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="bg-blue-400 text-center">
          <p className="font-bold text-xl text-black">Title</p>
        </th>
        <th className=" bg-slate-400 text-center">
          <p className="font-bold text-xl text-black">Marks</p>
          </th>
          <th className=" bg-blue-400 text-center">
          <p className="font-bold text-xl text-black">Examinee Name</p>
          </th>
          <th className=" bg-slate-400 text-center">
          <p className="font-bold text-xl text-black">Status</p>
          </th>
          <th className=" bg-blue-400 text-center">
          <p className="font-bold text-xl text-black">Marking</p>
         
          </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allMarked.map(item=>
        <>
      
           <tr>
        
        <td className="bg-custom-color font-bold text-center">
          {item.title}
        </td>
        <td className="bg-slate-200 font-bold text-center">
         {item.marks}
        </td>
        <td className="bg-custom-color font-bold text-center">{item.name}</td>
        <td className="bg-slate-200 font-bold text-center">{item.status}</td>
        <th className="bg-blue-200 font-bold text-center">
        <button onClick={()=>document.getElementById('my_modal_4').showModal()}  className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Give Mark</button>

    
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <div className="modal-action">
    <form onSubmit={(e) => handleMarked(e, item._id)} className="card-body">
    <div className="grid">
      <h2> Assignment pdf link: 
      <a className="text-blue-700" href={item.link}>
  {item.link}
</a>
      </h2>
     
    </div>
    <div>
      <h2 >Assignment Notes: <span className="text-blue-700">{item.note}</span></h2>
    </div>
<div className="form-control">
  <label className="label">
    <span className="label-text font-bold">Given Number</span>
  </label>
  
  <input type="text" required name="number" placeholder="Give your number" className="text-black bg-custom-color input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text font-bold">Feedback</span>
  </label>
  
  <input type="text" required name="feedback" placeholder="Give your feedback" className="text-black bg-custom-color input input-bordered" required />
</div>







<div className="form-control mt-6">
<button onClick={()=>handleUpdate(item._id)}  className="btn  border-black  bg-custom-color text-black hover:bg-black hover:text-white">Submit</button>

</div>

</form>
<form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Close</button>
 </form>
    </div>
   
  </div>
  <Toaster></Toaster>
</dialog>
   
       




        </th>
      </tr>
        
        </>
        
       
        
        
        
        
        )
      }
    
     
      
    </tbody>
    
    
  </table>
</div>

    </div>
  );
};

export default SubmittedAssignment;

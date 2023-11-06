import { useState } from "react";
import useAuth from "../../components/hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UpdateAssignment = () => {

 const loadedAssignment =useLoaderData()
 const { _id,title,photo,des,type,marks,date,userEmail}=loadedAssignment;
 console.log(loadedAssignment);
  const {user} = useAuth()
  const currentUserEmail =user?.email;
  console.log(currentUserEmail);
    

  const [startDate, setStartDate] = useState(new Date());

   
  

   const handleUpdate =e=>{
    e.preventDefault();
    const form = e.target;
    const title =form.title.value;
    const photo =form.photo.value;
    const des =form.des.value;
   const type =form.type.value;
   const marks =form.marks.value;
   const date =form.date.value;
  
   const updatedAssignment ={
    title,photo,des,type,marks,date
   }
  
   axios({
    method: 'put',
    url: `http://localhost:5000/allassignment/${loadedAssignment._id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: updatedAssignment
  })
    .then(response => {
      const data = response.data;
      console.log(data);
      if (data.modifiedCount > 0) {
        alert('User updated successfully');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });




   } 






  return (
    <div>
      <div className=" bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center  lg:text-left">
      <h1 className="text-5xl font-bold text-center">Assignment Form</h1>
      <p className="py-6 text-center">Make your Assignment on this form</p>
    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <form onSubmit={handleUpdate} className="card-body">

        
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Title</span>
          </label>
          
          <input defaultValue={title} type="text" name="title" placeholder="Title" className="text-black bg-custom-color input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            
            <span className="label-text">Description</span>
          </label>
          
          <input type="text" defaultValue={des}  name="des" placeholder="Description" className="text-black bg-custom-color input input-bordered h-28" required />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Assignment Photo URL</span>
          </label>
          <input type="text" defaultValue={photo} name="photo" placeholder="Assignment Photo" className="text-black bg-custom-color input input-bordered" required />
          
        </div>

        <div className="form-control">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <select name="type" defaultValue={type} className="input input-bordered text-black bg-custom-color " required>
    <option value="" hidden>
      Select Difficulty Level
    </option>
    <option value="easy">easy</option>
    <option value="medium">medium</option>
    <option value="hard">hard</option>
  </select>
</div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="number" defaultValue={marks} name="marks" placeholder="Marks" className="input input-bordered text-black bg-custom-color " required />
          
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Due Date</span>
          </label>
           
          <div className="text-black bg-custom-color flex items-center border border-bg-base-200 rounded">
  <span className="p-2">
    <FaCalendarAlt />
  </span>
  <DatePicker
    type="text"
    name="date"
    defaultValue={date}
    className="border-black border-none text-black bg-custom-color "
    selected={startDate}
    onChange={(date) => setStartDate(date)}
  />
</div>
 </div>




        <div className="form-control mt-6">
        <button  className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Submit</button>
        
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default UpdateAssignment;
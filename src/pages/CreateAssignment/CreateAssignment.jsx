import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import useAuth from "../../components/hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const CreateAssignment = () => {

  const {user} = useAuth()
  const userEmail =user?.email;
  


  const [startDate, setStartDate] = useState(new Date());

   const handleAssignment =e=>{
    e.preventDefault();
    const form = e.target;
    const title =form.title.value;
    const photo =form.photo.value;
    const des =form.des.value;
   const type =form.type.value;
   const marks =form.marks.value;
   const date =form.date.value;
  
   const allAssignment ={
    title,photo,des,type,marks,date,userEmail
   }
  //  
  

   //post data
   axios.post('http://localhost:5000/allassignment', allAssignment, {
  headers: {
    'Content-Type': 'application/json'
  }
   })
  .then(response => {
  console.log(response.data);
  if(response.data.insertedId){
    toast.success('Successfully created!');
    form.reset()
     }

   })
  .catch(error => {
  console.error(error);
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
      <form onSubmit={handleAssignment} className="card-body">

        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Title</span>
          </label>
          
          <input type="text" name="title" placeholder="Title" className="text-black bg-custom-color input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            
            <span className="label-text font-bold">Description</span>
          </label>
          
          <input type="text"  name="des" placeholder="Description" className="text-black bg-custom-color input input-bordered h-28" required />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Assignment Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Assignment Photo" className="text-black bg-custom-color input input-bordered" required />
          
        </div>

        <div className="form-control">
  <label className="label">
    <span className="label-text font-bold">Type</span>
  </label>
  <select name="type" className="input input-bordered text-black bg-custom-color " required>
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
            <span className="label-text font-bold">Marks</span>
          </label>
          <input type="number" name="marks" placeholder="Marks" className="input input-bordered text-black bg-custom-color " required />
          
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
<Toaster/>
    </div>
  );
};

export default CreateAssignment;
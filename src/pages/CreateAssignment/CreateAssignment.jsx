import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";



const CreateAssignment = () => {


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
   console.log(title,photo,des,type,marks,photo,date);
   }

  return (
    <div>

       <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Assignment Form</h1>
      <p className="py-6 text-center">Make your Assignment on this form</p>
    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <form onSubmit={handleAssignment} className="card-body">

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="des" placeholder="Description" className="input input-bordered" required />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Assignment Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Assignment Photo" className="input input-bordered" required />
          
        </div>

        <div className="form-control">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <select name="type" className="input input-bordered" required>
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
          <input type="number" name="marks" placeholder="Marks" className="input input-bordered" required />
          
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Due Date</span>
          </label>
           
          <div className="flex items-center border border-bg-base-200 rounded">
  <span className="p-2">
    <FaCalendarAlt />
  </span>
  <DatePicker
    type="text"
    name="date"
    className="border-black border-none"
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

export default CreateAssignment;
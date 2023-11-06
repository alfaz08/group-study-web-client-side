import { Link } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";






const SingleCardDetails = ({item}) => {
  const { _id,title,photo,des,type,marks,date,userEmail}=item;
  const {user} = useAuth()
  
  const email =user?.email;
  const name =user?.displayName
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const status = 'pending'
    const link =form.link.value;
    const note =form.note.value;

    const submitAssignment={link,note,title,marks,name,email,date,status}
    console.log(submitAssignment);
    // form.reset()

    axios.post('http://localhost:5000/submitassignment', submitAssignment, {
  headers: {
    'Content-Type': 'application/json'
  }
   })
  .then(response => {
  console.log(response.data);
  if(response.data.insertedId){
    toast.success('Successfully assignment submitted');
    form.reset()
     }

   })
  .catch(error => {
  console.error(error);
    });




  }








  return (
    <div className="grid md:grid-cols-2 mt-4 gap-6">

    <div className="md:border md:border-lime-400">
      <img className="h-[250px] md:h-[500px] w-full" src={photo} alt="" />
    </div>

    <div>
      <h1 className="font-bold text-xl">Assignment Name: {title}</h1>
     
     
       <h2 className="font-bold text-xl mt-4 ">Difficulty Level: {type}</h2>

       <h2 className="font-bold text-xl mt-4">Total Marks:{marks}</h2>
       <h2 className="font-semibold text-xl mt-4">Assignment Description:{des}</h2>
       <h2 className="font-bold text-xl mt-4">Submission Deadline: {date}</h2>
     
    

       <div className="bg-custom-color flex justify-between items-center sm:w-[200px] md:w-[400px] h-[100px] rounded-lg mt-4">
        <div>
          <h2 className="ml-2 font-bold">Complete the Assignment <br />Asses yourself</h2>
        </div>
        <div>
          <h2 className="mr-2 font-bold">So Hurry Up</h2>
        </div>
       </div>
       <div>
        
       </div>
       
       

       <div>
        <div>

        </div>
        
      
 
<div className="mt-4 md:ml-32 ">
      

      <button onClick={()=>document.getElementById('my_modal_4').showModal()}  className=" md:w-44 text-black btn font-bold border-black bg-custom-color hover:bg-black hover:text-white">Take Assignment </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">

  <div className="modal-box w-11/12 max-w-5xl">
   
    <div className="modal-action">

    <form onSubmit={handleSubmit} className="card-body">

        
<div className="form-control">
  <label className="label">
    <span className="label-text">Pdf Link</span>
  </label>
  
  <input type="text" required name="link" placeholder="Title" className="text-black bg-custom-color input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Short Note</span>
  </label>
  
  <input type="text" required name="note" placeholder="Title" className="text-black bg-custom-color input input-bordered" required />
</div>








<div className="form-control mt-6">
<button  className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Submit</button>

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




      
       </div>
       </div>
       
       
       
      
    </div>
    
  </div>
  );
};

export default SingleCardDetails;
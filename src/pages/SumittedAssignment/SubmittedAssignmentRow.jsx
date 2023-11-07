import { Toaster } from "react-hot-toast";
import useAuth from "../../components/hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const SubmittedAssignmentRow = ({item}) => {
  const {date,_id,email,link,marks,name,note,status,title} =item;
  // console.log(item);


  const {user} = useAuth()
  
  const markedEmail =user?.email;
  const markedName =user?.displayName

  const handleMarked=e=>{
    e.preventDefault()
    const form = e.target;
    const status = 'completed'
    const givenNumber =form.number.value;
    const feedback =form.feedback.value;

    const markedAssignment={markedEmail,markedName,status,givenNumber,feedback}
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
        <button onClick={()=>document.getElementById('my_modal_4').showModal()}  className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Give Mark</button>

    
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <div className="modal-action">
    <form onSubmit={handleMarked} className="card-body">
    <div className="grid">
      <h2> Assignment pdf link: 
      <a className="text-blue-700" href={link}>
  {link}
</a>
      </h2>
     
    </div>
    <div>
      <h2 >Assignment Notes: <span className="text-blue-700">{note}</span></h2>
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
   
       





        </th>
      </tr>
  );
};

export default SubmittedAssignmentRow;
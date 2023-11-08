import { useLoaderData } from "react-router-dom";

const SubmitMarking = () => {
  const loadedAssignment =useLoaderData()
  console.log(loadedAssignment);
  const { _id,title,photo,des,type,marks,link,date,userEmail}=loadedAssignment;
console.log(title);

const handleSubmitAssignment =(e,id)=>{
    e.preventDefault()
    const form = e.target;
    const givenNumber =form.marked.value;
    const feedback =form.feedback.value;

     fetch(`http://localhost:5000/marked/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        status: 'completed',
        givenNumber: givenNumber,
        feedback: feedback,
        })

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        console.log('data updated');
      }
    })

 


    console.log('dukci');
    
}

  return (
    <div>
      <form onSubmit={(e)=>handleSubmitAssignment(e,_id)} className="card-body">

        <div className="font-bold">
       <h2> Assignment Title: {title}</h2>
        </div>
        <div className="font-bold">
        Assignment Link: <a className="text-blue-700" href={link} target="_blank" rel="noopener noreferrer">
       {link}
     </a>
        </div>
<div className="form-control">
  <label className="label">
    <span className="label-text font-bold">Given Number</span>
  </label>
  
  <input type="number" name="marked" placeholder="Given Number" className="text-black bg-custom-color input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    
    <span className="label-text font-bold">Feedback</span>
  </label>
  
  <input type="text"  name="feedback" placeholder="Feedback" className="text-black bg-custom-color input input-bordered h-28" required />
  
</div>


<div className="form-control mt-6">
        <button className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Submit</button>
        
        </div>


</form>


</div>
   
  );
};

export default SubmitMarking;

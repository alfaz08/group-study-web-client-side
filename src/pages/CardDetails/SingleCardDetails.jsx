import { Link } from "react-router-dom";


const SingleCardDetails = ({item}) => {
  const { _id,title,photo,des,type,marks,date,userEmail}=item;
  return (
    <div className="grid grid-cols-2 mt-4 gap-6">

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
      
<Link to={'/login'}>
      <button  className=" md:w-44 text-black btn font-bold border-black bg-custom-color hover:bg-black hover:text-white">Take Assignment </button>
      </Link>
      
       </div>
       </div>
       
       
       
      
    </div>

  </div>
  );
};

export default SingleCardDetails;
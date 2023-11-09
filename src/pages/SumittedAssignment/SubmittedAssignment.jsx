import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentRow from "./SubmittedAssignmentRow";
import { useEffect, useState } from "react";
import axios from "axios";

const SubmittedAssignment = () => {
  const allData=useLoaderData()
  const [allMarked,setAllMarked]= useState(allData)
  console.log(allMarked);
  
   const filter= allMarked.filter(item=>item.status==='pending')

  //  const url ='https://group-study-server-mhdzltc20-alfaz-hossains-projects.vercel.app/submitassignment'
  //  //for jwt
  //  useEffect(() => {
  //   axios.get(url,{withCredentials:'include'})
  //     .then(response => {
  //       console.log(response.data); // Log the response data
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [url]); 



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
        filter.map(item=><SubmittedAssignmentRow
        key={item._id}
        item={item}
        ></SubmittedAssignmentRow>)
      }
    
     
      
    </tbody>
    
    
  </table>
</div>
    
    </div>
  );
};

export default SubmittedAssignment;

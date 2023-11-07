import { useEffect, useState } from "react";
import useAuth from "../../components/hooks/useAuth";
import axios from "axios";
import MyAssignmentRow from "./MyAssignmentRow";


const MyAssignment = () => {
const {user }=useAuth()
const [myAssignment,setMyAssignment] =useState([])
const url = `http://localhost:5000/submitassignment/byemail?email=${user?.email}`


useEffect(()=>{
  axios.get(url)
  .then(res => {
      setMyAssignment(res.data);
  })
},[])

return (
  <div>
    <div className="overflow-x-auto">
<table className="table">
  {/* head */}
  <thead>
    <tr>
      <th className="bg-amber-400 text-center">
        <p className="font-bold text-xl text-black">Title</p>
      </th>
      <th className=" bg-slate-400 text-center">
        <p className="font-bold text-xl text-black">Assignment Marks</p>
        </th>
        <th className=" bg-amber-400 text-center">
        <p className="font-bold text-xl text-black">Obtained Marks</p>
        </th>
        <th className=" bg-slate-400 text-center">
        <p className="font-bold text-xl text-black">Status</p>
        </th>
        <th className=" bg-amber-400 text-center">
        <p className="font-bold text-xl text-black">Feedback</p>
       
        </th>
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    {
      myAssignment.map(item=><MyAssignmentRow
      key={item._id}
      item={item}
      ></MyAssignmentRow>)
    }
  
   
    
  </tbody>
  
  
</table>
</div>
  
  </div>
);

};

export default MyAssignment;
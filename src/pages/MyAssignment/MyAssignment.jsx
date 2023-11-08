import { useLoaderData } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import MyAssignmentRow from "./MyAssignmentRow";

const MyAssignment = () => {
  
  const submitAssignment =useLoaderData();
  const {user}=useAuth()
  const email=user.email
  // console.log(submitAssignment,email);
  
  const myAssignment = submitAssignment.filter(item=>item.email===email)
 
console.log(myAssignment);

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

import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentRow from "./SubmittedAssignmentRow";


const SubmittedAssignment = () => {
  const allData=useLoaderData()
  
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
        allData.map(item=><SubmittedAssignmentRow
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
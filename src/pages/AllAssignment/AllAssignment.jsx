import { useState } from "react";


import SingleAllAssignment from "./SIngleAllAssignment";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";


const AllAssignment = () => {
  // const [assignments, setAssignments] = useState([]);
  const [selectValue,setSelectedValue] =useState('')
  const allData=useLoaderData()
  const {user} = useAuth()
  const currentUserEmail =user?.email;
  
  const [newAssignmentList,setNewAssignmentList] =useState(allData)

 

   const handleSelectChange=e=>{
    setSelectedValue(e.target.value)
    
   }
  //  console.log(selectValue);

   const easy = newAssignmentList.filter(item=>item.type==='easy')
   const medium = newAssignmentList.filter(item=>item.type==='medium')
   const hard = newAssignmentList.filter(item=>item.type==='hard')
   const all=useLoaderData()

   

  return (
    <div className="mt-6 max-w-6xl mx-auto ">
    
    <div className="flex justify-center">
    <select name="type" 
    className=" input input-bordered text-black bg-custom-color " 
    value={selectValue}
    onChange={handleSelectChange}
    required>
    <option value="" hidden>
      Select Difficulty Level
    </option>
    <option value="easy">easy</option>
    <option value="medium">medium</option>
    <option value="hard">hard</option>
    <option value="all">All</option>
    
  </select> 



  


    </div>
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
       {
        selectValue==='easy'?
        (
          easy.map(assignment=> <SingleAllAssignment newAssignmentList={newAssignmentList} setNewAssignmentList={setNewAssignmentList}  key={assignment._id} currentUserEmail={currentUserEmail} assignment={assignment}></SingleAllAssignment> )
        ):
        selectValue==='medium'?
        (
          medium.map(assignment=> <SingleAllAssignment newAssignmentList={newAssignmentList} setNewAssignmentList={setNewAssignmentList} key={assignment._id} currentUserEmail={currentUserEmail} assignment={assignment}></SingleAllAssignment> )
        ):
        selectValue==='hard'?
        (
          hard.map(assignment=> <SingleAllAssignment key={assignment._id}  newAssignmentList={newAssignmentList} setNewAssignmentList={setNewAssignmentList} currentUserEmail={currentUserEmail} assignment={assignment}></SingleAllAssignment> )
        ):
        selectValue==='all'?
        (
          newAssignmentList.map(assignment=> <SingleAllAssignment key={assignment._id} currentUserEmail={currentUserEmail} newAssignmentList={newAssignmentList} setNewAssignmentList={setNewAssignmentList} assignment={assignment}></SingleAllAssignment> )
        ):
        newAssignmentList.map(assignment=> <SingleAllAssignment currentUserEmail={currentUserEmail} newAssignmentList={newAssignmentList} setNewAssignmentList={setNewAssignmentList} key={assignment._id} assignment={assignment}></SingleAllAssignment> )
       }
      </div>
    </div>
  );
};

export default AllAssignment;
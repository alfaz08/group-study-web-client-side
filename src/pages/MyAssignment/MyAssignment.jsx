import { useLoaderData } from "react-router-dom";


const MyAssignment = () => {
  
  const loadedAssignment =useLoaderData();
  console.log(loadedAssignment);
  
  return (
    <div>
      
    </div>
  );
};

export default MyAssignment;
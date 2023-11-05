import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import FeaturesCard from "./FeaturesCard";


const Features = () => {
  const [assignments, setAssignments] = useState([]);
  const url = 'http://localhost:5000/allassignment';
  useEffect(() => {
      axios.get(url)
      .then(res => {
          setAssignments(res.data);
      })
  }, [url]);
  console.log(assignments);

  return (
    <div className="mt-6 max-w-5xl mx-auto ">
    
      <h2 className="text-center font-semibold text-5xl mt-4">Featured Items</h2>
      <div className="grid justify-center mt-2">
      <hr className=" w-80 border-b-8 border-lime-400"/>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
       {
        assignments.slice(0, 6).map(assignment=> <FeaturesCard key={assignment._id} assignment={assignment}></FeaturesCard> )
       }
      </div>
    </div>
  );
};

export default Features;
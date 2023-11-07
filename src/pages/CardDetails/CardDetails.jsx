import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardDetails from "./SingleCardDetails";


const CardDetails = () => {

  const allData = useLoaderData();
  // console.log(allData);
  const {id}=useParams()
  // console.log(id);
  
  const showData = allData.filter(item=>item._id===id)
  // console.log(showData);
  
  return (
    <div>
      {
        showData.map(item=> <SingleCardDetails key={item._id} item={item}></SingleCardDetails>)
      }
    </div>
  );
};

export default CardDetails;
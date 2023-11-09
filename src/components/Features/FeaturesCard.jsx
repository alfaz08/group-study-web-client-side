

const FeaturesCard = ({assignment}) => {
  const { title,photo,des,type,marks,date,userEmail}=assignment;
  // console.log(assignment);
  return (
//     <div>
//       <div className="card h-[500px] bg-custom-color shadow-xl">
//   <figure><img className=" h-80 w-full" src={photo} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {title}
//       <div className="badge badge-secondary">{type}</div>
//     </h2>
    
//     <p>{des}</p>
//     <p className="font-bold">Marks: {marks}</p>
//     <h2 className="font-bold">Due Date: {date}</h2>
//     {/* <div className="card-actions justify-center">
    

//     </div> */}
//   </div>
// </div>
//     </div>
<div className="card bg-custom-color shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl h-64" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{des}</p>
    <div className="card-actions text-center">
      <h2 className="font-bold">Difficulty Level:{type}</h2>
      <h2 className="font-bold">Due Date:{date}</h2>
    
      
    </div>
  </div>
</div>
  );
};

export default FeaturesCard;
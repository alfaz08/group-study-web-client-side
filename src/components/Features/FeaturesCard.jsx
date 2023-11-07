

const FeaturesCard = ({assignment}) => {
  const { title,photo,des,type,marks,date,userEmail}=assignment;
  // console.log(assignment);
  return (
    <div>
      <div className="card bg-custom-color shadow-xl">
  <figure><img className=" w-full h-52" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{type}</div>
    </h2>
    <p>{des}</p>
    <p className="font-bold">Marks: {marks}</p>
    <div className="card-actions justify-center">
    <button className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">See Details</button>
      <button className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">Update </button>
      

    </div>
  </div>
</div>
    </div>
  );
};

export default FeaturesCard;
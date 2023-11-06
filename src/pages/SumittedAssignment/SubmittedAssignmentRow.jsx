

const SubmittedAssignmentRow = ({item}) => {
  const {date,_id,email,link,marks,name,note,status,title} =item;
  console.log(item);
  return (
    <tr>
        
        <td className="bg-custom-color font-bold text-center">
          {title}
        </td>
        <td className="bg-slate-200 font-bold text-center">
         {marks}
        </td>
        <td className="bg-custom-color font-bold text-center">{name}</td>
        <td className="bg-slate-200 font-bold text-center">{status}</td>
        <th className="bg-blue-200 font-bold text-center">
        <button  className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Submit</button>
        </th>
      </tr>
  );
};

export default SubmittedAssignmentRow;

const MyAssignmentRow = ({item}) => {
  const {date,_id,email,link,marks,name,note,status,title,givenNumber,feedback} =item;
   
  return (
    <tr>
        
        <td className="bg-custom-color font-bold text-center">
          {title}
        </td>
        <td className="bg-slate-200 font-bold text-center">
         {marks}
        </td>
        <td className="bg-custom-color font-bold text-center">
        {givenNumber ? givenNumber : "Not Checked yet"}
          </td>
        <td className="bg-slate-200 font-bold text-center">{status}</td>
        <th className="bg-blue-200 font-bold text-center">
        {feedback ? feedback : "Not Checked yet"}
        </th>
      </tr>
  );
};

export default MyAssignmentRow;
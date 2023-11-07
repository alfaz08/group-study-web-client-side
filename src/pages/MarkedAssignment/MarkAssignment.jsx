import useAuth from "../../components/hooks/useAuth";


const MarkAssignment = () => {

  const {user} =useAuth()
  const email =user?.email;
  console.log(email);

  return (
    <div>
      
    </div>
  );
};

export default MarkAssignment;
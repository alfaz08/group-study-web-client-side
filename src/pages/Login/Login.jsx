import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";


const Login = () => {

  
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:ml-32">
     <div className="hidden md:block ">
       <img className="h-[530px] w-[420px] mt-32" src="https://i.ibb.co/Qkbj5bY/Screenshot-2023-10-18-115151.jpg" alt="" />
     </div>
     <div className="">
     <div className="hero">
  <div className="hero-content flex-col md:w-[700px] ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome to our website and explore it</p>
    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-custom-color">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
        <button  className="btn border-black  bg-custom-color text-black hover:bg-black hover:text-white">Login</button>
        </div>
      </form>



      <p className="text-center mt-4 mb-4 ">
        <span className="text-xl font-semibold ">Don't have an account please</span>
        <Link to="/register"  className=" font-bold text-blue-600 text-xl hover:text-white"> Register</Link>
      </p>


      <div className="flex items-center justify-center">
     <hr className="mr-2 ml-4 w-36 border-black" />
      <span>or</span>
      <hr className="ml-2 mr-4 w-36 border-black"/>
     </div>
     <div className="text-center mb-4 mt-4 ">
      <button   className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white"><FaGooglePlusG  className="text-white text-2xl "></FaGooglePlusG>Login with google</button>
     </div>




    </div>
  </div>
</div>



     </div>

     
 
    </div>
  );
};

export default Login;
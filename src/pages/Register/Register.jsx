import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import useAuth from "../../components/hooks/useAuth";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";



const Register = () => {

  const {googleLogin,createUser} =useAuth()
  const [error,setError] =useState("")
  const [registerSuccess,setRegisterSuccess] =useState('')
 
  const [loggedIn,setLoggedIn] =useState(false)
  


  //google Login
  const handleSocialLogin=(media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  

  const handleRegister =e =>{

      e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const photo =form.photo.value;
        const email =form.email.value;
    const password =form.password.value;
    console.log(email,password,name,photo);

    if((!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) ){
      const errorMessage = "Password must be at least six characters long, with at least one letter and one digit."
     setError(errorMessage);
     toast(errorMessage)
     const passwordInput = document.querySelector('input[name="password"]')
      if(password){
        passwordInput.value=''
      }
    } 
    // navigate('/')
    else{
      setError('')
      createUser(email,password)
      .then(userCredentials=>{
        const user= userCredentials.user;
        updateProfile(user,{
          displayName:name,
          photoURL: photo
        })
        toast.success('Registration and Login Successful') 
       setLoggedIn(true)
      }

      )
      .catch(error=>{
        console.error(error.message)
        toast.error('Something Went Wrong')
      })
    }




  }



  return (
    <div>
      {
        loggedIn && <Navigate to="/"></Navigate>
      }
      <div className="grid grid-cols-1 md:grid-cols-4 lg:ml-80">
     <div className="">
     <div className="hero">
  <div className="hero-content flex-col md:w-[700px]">
    <div className="text-center lg:text-left">
    <img className="hidden md:block w-80" src="https://i.ibb.co/brfMXPh/203-2035339-register-user-register-online-icon-png.jpg" alt="" />
    </div>
    <div className="card w-full shadow-2xl bg-custom-color">
      <form onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
        </div>
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
          <button className=" text-black btn border-black bg-custom-color hover:bg-black hover:text-white">Register</button>
        </div>
      </form>

      <p className="text-center mt-4 mb-4 ">
        <span className=" text-xl font-semibold">Already have an account please</span>
        <Link to="/login"  className=" font-bold text-blue-600 text-xl hover:text-white"> Login</Link>
      </p>


      <div className="flex items-center justify-center">
     <hr className="mr-2 ml-4 w-36 border-black" />
      <span>or</span>
      <hr className="ml-2 mr-4 w-36 border-black"/>
     </div>
     <div className="text-center mb-4 mt-4 ">
     <button onClick={()=>handleSocialLogin(googleLogin)}   className=" text-red-600 font-bold btn border-black bg-custom-color hover:bg-black hover:text-white"><FaGooglePlusG  className=" text-red-600 text-2xl "></FaGooglePlusG>Login with google</button>
     </div>




    </div>
  </div>
</div>
     </div>
  


     <div>
     
     </div>

     <ToastContainer/>
   </div>
    </div>
  );
};

export default Register;
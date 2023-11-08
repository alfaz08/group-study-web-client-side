import { FaFacebook,FaInstagramSquare,FaYoutube,FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-custom-color text-base-content rounded">
<div className="grid grid-cols-1 md:grid-cols-3">

<div>

  <h2 className="font-bold text-2xl">Follow Us</h2>
   <div className="mt-2 text-2xl flex items-center justify-center gap-6">
   <FaFacebook></FaFacebook>
   <FaInstagramSquare></FaInstagramSquare>
   <FaYoutube></FaYoutube>
   <FaTwitter></FaTwitter>
   </div>
  
  
    <p className="mt-4 font-semibold">Copyright © 2023 - All right reserved by Online Group Study</p>

 </div>

 <div className="grid">
   <div>
   <h2 className="font-bold text-4xl"> Complete your assignment</h2>
   </div>
   <div>
   <button className="btn btn-outline w-[100px] text-center text-black mt-2 bg-white">Click On</button>
   </div>
    
 </div>
 <div>
 <div className="stats shadow">
  
  
  
  <div className="stat place-items-center">
    <div className="stat-title text-black">Regular Customer</div>
    <div className="stat-value text-black">4,200</div>
    <div className="stat-desc text-black">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title text-black">New Customer</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc text-black">↘︎ 90 (14%)</div>
  </div>
  
</div>
 </div>
</div>
  
</footer>

    </div>
  );
};

export default Footer;
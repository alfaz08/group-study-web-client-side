

const Faq = () => {
  return (
    <div>

<h2 className="text-center font-semibold text-5xl mt-4">Frequently Asked Question</h2>
      <div className="grid justify-center mt-2">
      <hr className=" w-80 border-b-8 border-lime-400"/>
      </div>
      <div>

      </div>
      <div className="join join-vertical w-full mt-10">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4"  /> 
    <div className="collapse-title text-xl font-medium">
    What is the purpose of this group study website?
    </div>
    <div className="collapse-content"> 
      <p>This website is designed to help students find and organize group study sessions, collaborate with peers, and enhance their learning experience through group study.</p>
    </div>
  </div>
  <div className="collapse m collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What if I need technical support or assistance with the website?
    </div>
    <div className="collapse-content"> 
      <p>If you encounter technical issues or need help with the website, you can contact our support team via the provided contact information for prompt assistance.</p>
    </div>
  </div>
  <div className="collapse m collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Which Features is most interesting of this website?
    </div>
    <div className="collapse-content"> 
      <p>All assignment are asses by top teachers.</p>
    </div>
  </div>




  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Why people are use our website?
    </div>
    <div className="collapse-content"> 
      <p>Beacause every student  can submit assignment and judge themselves.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How do I find study materials and resources on this website?
    </div>
    <div className="collapse-content"> 
      <p>We offer a resource library where you can find study materials, notes, and resources shared by other users. You can search for specific topics or subjects.</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Faq;





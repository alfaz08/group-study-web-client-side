

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
      Which kind of users use our website?
    </div>
    <div className="collapse-content"> 
      <p>All types of student who read in university level are capable of using our website.</p>
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
</div>
    </div>
  );
};

export default Faq;
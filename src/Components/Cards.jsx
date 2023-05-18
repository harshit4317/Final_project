import React from "react";

function Cards({mode,svgType}) {
  const abc=()=>{
    console.log(mode)
  }
  return (
    <div className="m-5 ml-12 mr-12 ">
      <div className={`max-w-sm p-6 bg-${mode==="white"?"white":"gray-900"}  rounded-lg  shadow-2xl shadow-blue-gray-800 `}>
        <img className="w-8 h-8 mb-2 " src={svgType} alt="" />
        
        <a href="#">
          <h5 className={`mb-2 text-2xl font-semibold tracking-tight text-${mode==="white"?"gray-900":"white"}`}>
            Need a help in Claim?
          </h5>
        </a>
        <p className={`mb-3 font-normal text-gray-600 `}>
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a onClick={abc}
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          View More
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";

function SingleFaq({ question, answer }) {
  return (
    <details className=" p-6 transition-all duration-300 ease-in-out bg-white rounded-lg">
      <summary className="transition-all duration-300 ease-in-out ">
        {question}
      </summary>
      <p className="p-2 ">{answer}</p>
    </details>
  );
}

export default SingleFaq;

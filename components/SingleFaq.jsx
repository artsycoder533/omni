import React from "react";
import { isArray } from "util";

function SingleFaq({ question, answer }) {
  return (
    <details className=" p-6 transition-all duration-300 ease-in-out bg-white rounded-lg">
      <summary className="transition-all duration-300 ease-in-out font-semibold">
        {question}
      </summary>
      {!isArray(answer) ? (
        <p className="p-2 mt-2">{answer}</p>
      ) : (
        answer.map((el) => <li className="p-1 mt-2 list-outside">{el}</li>)
      )}
    </details>
  );
}

export default SingleFaq;

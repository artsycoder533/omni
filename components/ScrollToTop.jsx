import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollButton);
    return () => {
      window.removeEventListener("scroll", toggleScrollButton);
    };
  }, []);

  const toggleScrollButton = () => {
    if (window.scrollY > 100) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  const scrollPageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {toTop ? (
        <button
          className="fixed bottom-[75px] right-5 rounded-full bg-[#BDE11A] text-black b-white cursor-pointer shadow-mg hover:opacity-75 hover:text-[#1A8C91] hover:shadow-lg"
          onClick={scrollPageUp}>
          <FiArrowUp className="text-2xl font-extrabold" />
        </button>
      ) : null}
    </>
  );
}

export default ScrollToTop;

import React, { useState } from "react";
import { PopupButton, PopupModal } from "react-calendly";

function CalendlyButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <PopupButton
        url="https://calendly.com/njohnson533"
        rootElement={
          typeof window !== "undefined"
            ? document.getElementById("__next")
            : null
        }
        text="Schedule Appointment"
        className="items-center overflow-hidden transition-all bg-[#BDE11A] rounded-md hover:bg-[#4A076D] group border-none text-black text-center"></PopupButton> */}
      <button
        className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#BDE11A] rounded-md hover:bg-white group border-none text-white"
        onClick={() => setOpen(true)}>
        {/* purple box */}
        <span className="w-0 h-0 rounded-md bg-[#601A7F] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:border-[#601A7F] border"></span>
        <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 border-none">
          Schedule Appointment
        </span>
      </button>
      {open && (
        <PopupModal
          url="https://calendly.com/njohnson533"
          onModalClose={() => setOpen(false)}
          open={() => setOpen(true)}
          rootElement={
            typeof window !== "undefined"
              ? document.getElementById("__next")
              : null
          }
        />
      )}
    </>
  );
}

export default CalendlyButton;

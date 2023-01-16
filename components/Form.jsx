import React from 'react'

function Form() {
  return (
    <form
      name="omni"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify="true"
      className="w-full flex flex-col gap-8">
      <input type="hidden" name="form-name" value="omni" />
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="email"
            className="border-b"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b"
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="We are committed to your privacy.  Please only include general non-confidential information."
          required
          className="border-b"></textarea>
      </div>
      <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#BDE11A] rounded-md hover:bg-white group border-none text-white self-end">
        {/* purple box */}
        <span className="w-0 h-0 rounded-md bg-[#601A7F] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:border-[#601A7F] border"></span>
        <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 border-none">
          Send Message
        </span>
      </button>
      <p className="text-white">
        * By submitting this form via this web portal, you acknowledge and
        accept that risks of communicating your health information via this
        unencrypted email and electronic messaging and wish to continue despite
        those risks. By clicking &quot;Yes, I want to submit this form&quot;,
        you agree to hold Omni Addiction & Mental Health Services harmless for
        unauthorized use, disclosure, or access of your protected health
        information sent via this electronic means.
      </p>
    </form>
  );
}

export default Form
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
      <button type="submit" className="bg-[#1A8C91] border-none self-end">
        Send Message
      </button>
      <p className="bg-[#B5DD00] p-4 text-black">
        * By submitting this form via this web portal, you acknowledge and accept
        that risks of communicating your health information via this unencrypted
        email and electronic messaging and wish to continue despite those risks.
        By clicking &quot;Yes, I want to submit this form&quot;, you agree to
        hold Omni Addiction & Mental Health Services harmless for unauthorized
        use, disclosure, or access of your protected health information sent via
        this electronic means.
      </p>
    </form>
  );
}

export default Form
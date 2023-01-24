import React from 'react'

function GoogleMap() {
  return (
    <div className="w-full h-full flex">
      <iframe
        title="Map of Omni Addiction & Mental Health Services"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1636733.154874096!2d-79.95233430000002!3d36.75270480000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1ffd8af8d8935%3A0xab1d70eb1982b90f!2sOmni%20Addiction%20%26%20Mental%20Health%20Services!5e0!3m2!1sen!2sus!4v1674522046450!5m2!1sen!2sus"
        allowFullScreen=""
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default GoogleMap
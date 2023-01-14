import React from 'react'

function GoogleMap() {
  return (
    <div className="w-full h-full border flex">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.1357566116162!2d-77.8472817269141!3d36.75753845973171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1fead4f77a1cf%3A0x5600f0733181897c!2s102%20Hicks%20St%2C%20Lawrenceville%2C%20VA%2023868!5e0!3m2!1sen!2sus!4v1673569610207!5m2!1sen!2sus"
        allowFullScreen=""
        className="w-full h-64"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default GoogleMap
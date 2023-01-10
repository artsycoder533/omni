import React from 'react'

function SingleFaq({question, answer}) {
  return (
    <details>
      <summary>
        <p>{question}</p>
      </summary>
      <div>
        <p>{answer}</p>
      </div>
    </details>
  )
}

export default SingleFaq
import React from 'react'

const SubmitBtn = props => {
  const { text } = props;
  return (
    <div>
      <div className="submitBtn">
        <input type="submit" value={text} />
      </div>
    </div>
  )
}

export default SubmitBtn
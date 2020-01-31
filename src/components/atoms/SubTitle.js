import React from 'react'

const SubTitle = props => {
  const { text } = props;
  return (
    <div>
      <div className="subTitle">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SubTitle

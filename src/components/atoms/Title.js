import React from "react";

function Title({ text, type: titleType } ) {
  return (
    <div>
      <div className={titleType}>
        <p>
          {text}:{titleType}
        </p>
      </div>
    </div>
  );
}

export default Title;

// import React from 'react'

// export const Title = (props) => {
//   return (
//     <div>
      
//     </div>
//   )
// }


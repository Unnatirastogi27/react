import React from 'react'

const Message = (props) => {
  return (
    <div>
        <h2>We are reading {props.lang}in{props.lab}</h2>
    </div>
  );
};

export default Message;

import React from 'react'

const Jsxexample = () => {
  let n1=10,n2=50;
  const findGreater = () =>
  {
     if(n1>n2)
     {
      return "n1";
     }
     else
     {
       return "n2";
     }
  }
  return (
    <div>
       <h2>JSX EXAMPLE</h2>
       <h3>Greater Number is {findGreater()}</h3>
    </div>
  );
};

export default Jsxexample

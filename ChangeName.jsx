import React,{useState} from 'react'

const ChangeName = () => {
   const [name, setName] = useState("MCA");
   const chName= () => {
     setName("React");
   } ;
  return (
    <div>
        <h2>Your name is {name}</h2>
       {/*} <button onClick={chName}>Change Name</button>*/}
    </div>
  )
}

export default ChangeName;

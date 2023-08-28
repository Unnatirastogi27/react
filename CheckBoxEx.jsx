import React,{useEffect, useState} from 'react'

const CheckBoxEx = () => {
    const [selectlang,setSelectLang]=useState([]);
    const [lang , setLang]= useState({
        java:false,
        Python:false,
        javascript:false,
        kotlin:false,
    });
   
    const checkLang=(event)=>{
        const {name, checked}=event.target;
        setLang({...lang,[name]:checked});
        //setSelectLang ([...selectlang,name]);
        
    };
    useEffect(()=>{
    displayLang()
},[lang]);
    const displayLang = () =>{
    if(lang.java){
        setSelectLang([...selectlang, "Java"]);
    }
    if(lang.javascript){
        setSelectLang([...selectlang, "Javascript"]);
    }
    if(lang.python){
        setSelectLang([...selectlang, "Python"]);
    }
    if(lang.kotlin){
        setSelectLang([...selectlang, "Kotlin"]);
    }
    };
  return (
    <div className="m-5">
       <h4> Select Your Language</h4>
       <form className ="d-flex flex-column">
        <div>
        <input type="checkbox" name="java" onChange={checkLang}/>
        <b>&nbsp; Java</b>
        </div>
        <div>
        <input type="checkbox" name="javascript"onChange={checkLang}/>
        <b>&nbsp; Javascript</b>
        </div>
        <div>
        <input type="checkbox" name="kotlin" onChange={checkLang}/>
        <b>&nbsp; Kotlin</b>
        </div>
        <div>
        <input type="checkbox" name="python" onChange={checkLang}/>
        <b>&nbsp; Python</b>
        </div>
        <div>{JSON.stringify(lang)}</div>
        <div>{JSON.stringify(selectlang)}</div>

        
       </form>
        </div>
  )
}

export default CheckBoxEx

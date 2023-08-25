import React , {useState} from 'react'
import Counter from './Counter'

const TotalCounter = () => {
    const[counters ,setCounters]=useState([
        {id:1, counts:0},
        {id:2, counts:2},
        {id:3, counts:3},
        {id:4, counts:4},
    ])
    const deleteCounter = (id)=>{
        //map function sab value ko ek ek baar bhejta h or filter condition check karega or phir perform karega
            const lcounter=  counters.filter((counter)=>counter.id!==id);
            setCounters(lcounter)
    }
  return (
    <div>
        {counters.map((counter)=> (
            <Counter key={counter.id}
             counter={counter} 
             onDelete={deleteCounter}/>
        ))}
    </div>
  )
}

export default TotalCounter

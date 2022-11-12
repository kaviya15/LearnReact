// import React,{useState,useEffect} from 'react'

// function MemoComponent() {
//     const [name,setName] = useState("Chuddkie");
//     useEffect(()=>{
//         setInterval(()=>{
//             console.log("state is updated~~");
//             setName("Chuddkie");
//         },1000)
//     },[])

//      console.log("rendering component");
//   return (
//     <div>MemoComponent {name}</div>
//   )
// }

// export default React.memo(MemoComponent)

import React from "react";

function MemoComponent(props) {
  console.log("Comp rendering props ");
  return <div>MemoComponent {props.count} </div>;
}

export default React.memo(MemoComponent);
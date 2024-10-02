import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
export default function App() {
  const [color , setColor] = useState([]);
  const input = useRef();
  return (
   <div className="col-10 m-auto my-3">
     <div className="d-flex">
     <input type="text"  ref={input} className="form-control p-3 fs-4"/>
     <button className="btn btn-primary col-1"  onClick={()=>{
      let newColor =[...color];
      newColor.push(input.current.value);
      setColor(newColor);
     }}>add task</button>
     </div>
     
     <ul>{color.map((el, index)=>{
      return <li key={index} className="fs-4 d-flex justify-content-between my-3 border-bottom p-3">{index+1} :  {el} 
      <div className="d-flex gap-2 mx-4 ">
      <button className="btn btn-danger" onClick={()=>{
        let newColor=[...color];
        newColor.splice(index,1);
        setColor(newColor);
      }}>del</button>
      <button className="btn btn-warning " onClick={()=>{
        let newColor =[...color];
        newColor[index]= prompt("update color");
        setColor(newColor);
      }}>updat</button>
      </div>
      </li>
     })}</ul>
     </div>
  )
}

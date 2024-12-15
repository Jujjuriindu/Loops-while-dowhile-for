import React, {} from "react";

function LoginPage() {
  return (
    <div>
      <h1>Loops</h1>
      <button onClick={()=>{
        let a=1;
        while(a<1000){
          console.log(a);
          a++;
        }
      }}>While</button>
      <button onClick={()=>{
        let a=100;
        do{
          console.log("Passed the exam");
          a--;
          console.log(a);
        }
        while(a>10);
      }}>do while</button>
      <button onClick={()=>{
        for(let i=1;i<=100;i++){
          console.log(i);
        }
      }}>For</button>
      <button onClick={()=>{
        for(let i=1;i<=50;i++){
          for(let j=1;j<=50;j++){
            console.log(`${i}----->${j}`);
          }
        }
      }}>Nested for</button>
      <button onClick={()=>{
        for(let i=1;i<=1000;i++){
          console.log(i);
          if(i==299){
            break;
          }
        }
      }}>Break</button>
      <button onClick={()=>{
        for(let i=1;i<=100;i++){
          if(i>46 && i<93){
            continue;
          }
          console.log(i);
        }
      }}>Continue</button>
      <button onClick={()=>{
        for(let i=1;i<=500;i++){
          for(let j=1;j<=100;j++){
            console.log(`${i} * ${j} = ${i * j}`);
          }
        }

      }}>Tables</button>
    </div>
  );
}

export default LoginPage;

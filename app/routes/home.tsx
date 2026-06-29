import { useNavigate } from "react-router";
import type { Route } from "./+types/home";
import NavBtn from "~/components/NavBtn";
// import { Welcome } from "../welcome/welcome";



export default function Home() {
  
  
  return (
  <>
  <div className="h-screen w-full bg-amber-50"> 

      <nav className="flex">
         <NavBtn text="About" path="/front"/>
       <NavBtn text="Calculator" path="/calculator"/>
       <NavBtn text="Counter" path="/counter"/>
        <NavBtn text="list" path="/todo"/>
        
          <NavBtn text="" path=""/>
      </nav>
    <h1 className="p-60 text-black">Home</h1>
  </div> 
  </>
  );
}

// import { useNavigate } from "react-router";
// import type { Route } from "./+types/home";

import NavBtn from "~/components/NavBtn";




export default function Home() {
  
  
  return (
 <>
 <div className="bg-white h-screen pt-30">
     <nav className="flex p-5 px-10 justify-between border-2 border-black mx-60">
      <NavBtn text="Calculator" path="/calculator"/>
       <NavBtn text="Counter" path="/counter"/>
        <NavBtn text="list" path="/todo"/>
     </nav>
    <h1 className="p-60 text-white">Home</h1>
    </div>
  </>
  );
}

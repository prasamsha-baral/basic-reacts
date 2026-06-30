import { useNavigate } from "react-router"

type NavBtnProps={
    text:string;
    path:string;
}

const NavBtn = ({text,path}:NavBtnProps) => {
    const navigate =useNavigate()
  return (
    <button className=" cursor-pointer underline  border-r-2 font-sans text-black text-xs px-2 shadow-md hover:shadow-2xl "
        onClick={()=>navigate(path)}>{text}</button>
  )
}

export default NavBtn


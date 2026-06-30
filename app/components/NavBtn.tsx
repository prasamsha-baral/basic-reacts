import { useNavigate } from "react-router"

type NavBtnProps={
    text:string;
    path:string;
}

const NavBtn = ({text,path}:NavBtnProps) => {
    const navigate =useNavigate()
  return (
    <button className=" cursor-pointer font-sans text-black text-xs px-2 pt-1.5 "
        onClick={()=>navigate(path)}>{text}</button>
  )
}

export default NavBtn


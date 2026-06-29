import { useNavigate } from "react-router"

type NavBtnProps={
    text:string;
    path:string;
}

const NavBtn = ({text,path}:NavBtnProps) => {
    const navigate =useNavigate()
  return (
    <button className="text-black p-6 underline cursor-pointer"
        onClick={()=>navigate(path)}>{text}</button>
  )
}

export default NavBtn
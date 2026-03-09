import { Link } from "react-router-dom";
import "./NavBar.css";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {
  let params = useParams();
  const [activeItem, setActiveItem] = useState("works");
  const navItems = [{id: "works", label: "WORKS", link:"/works"}, 
                    {id: "aboutme", label: "ABOUT ME", link:"/aboutme"},];
  console.log(params);

  return(
    <>
    <div className="navbar">
      <h3>MIGUEL CAPILI</h3>
      <ul className="nav-items">
        {navItems.map((item,index)=>(
          <Link key={index} className="react-link" to={item.link}>
            <li className={activeItem === item.id? "selected":""} 
                onClick={()=>setActiveItem(item.id)}>{item.label}
            </li>
          </Link>
        ))}
      </ul>
      <theme-toggle></theme-toggle>
    </div>
    </>
  )
}
export default NavBar
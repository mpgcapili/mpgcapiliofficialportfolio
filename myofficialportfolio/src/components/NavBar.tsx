import { Link } from "react-router-dom"

const NavBar = () => {
  return(
    <>
      <ul>
        <li><Link to="/works">Works</Link></li>
        <li><Link to="/aboutme">About Me</Link></li>
        <li></li>
      </ul>
    </>
  )
}
export default NavBar
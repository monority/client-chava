import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/Register'>Register</Link>
    </nav>
  )
}

export default Navbar
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../../Components/Hooks/useAuthContext";
import { IoCart } from "react-icons/io5";
import useCart from "../../Components/Hooks/useCart";

const Navbar = () => {
  const {user , logout} = useAuthContext()
  const navigate = useNavigate()
  const {cart} = useCart()

  const handleLogout = () => {
    logout()
    .then(result => {
      const user = result.user
      console.log(user);
      navigate('/login')
  }).then(err => {
      console.log('ERROR', err);
  })
  }

    const navOptions = <>
        <li><NavLink className="uppercase font-bold font-inter" to={'/'}>Home</NavLink> </li>
        {/* <li><NavLink className="uppercase font-bold font-inter" to={'/contact'}>Contact Us</NavLink> </li> */}
        {/* <li><NavLink className="uppercase font-bold font-inter" to={'/dashboard'}>DASHBOARD</NavLink> </li> */}
        <li><NavLink className="uppercase font-bold font-inter" to={'/menu'}>Our Menu</NavLink> </li>
        <li><NavLink className="uppercase font-bold font-inter" to={'/order/dessert'}>Order</NavLink> </li>
        <li> {user?.email ? <NavLink onClick={handleLogout} className="uppercase font-bold font-inter" to={'/login'}>Logout</NavLink> : <NavLink className="uppercase font-bold font-inter" to={'/login'}>Login</NavLink>} </li>
    </>

  return (
    <div className="navbar p-0 px-2 sticky top-0 z-10 bg-pink-50/30 backdrop-blur-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}

          </ul>
        </div>
        <Link to={'/'} className="font-cinzel"><p className="text-xl font-bold uppercase">Bistro Boss</p><p className="font-medium uppercase tracking-[3px] max-md:hidden">Restaurant</p></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navOptions}
        </ul>
      </div>
      <p className="navbar-end relative"><IoCart className="text-5xl font-bold" /> <span className="rounded-badge bg-red-500 absolute px-1 -top-1">+{cart.length}</span> </p>
    </div>
  );
};

export default Navbar;

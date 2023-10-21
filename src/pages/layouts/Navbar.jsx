import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="flex  md:gap-10 ">
      <div className=" w-[80px] md:w-[180px] object-cover ml-16 mt-2">
        <img src="https://i.ibb.co/THJMh1c/default-1.png" alt="" />
      </div>
      <div className=" text-white flex  items-center gap-2 md:gap-5 text-[6px] md:text-[15px] font-semibold cursor-pointer ml-2 mb:ml-44 ">
        <NavLink className="hover:underline underline-offset-8" to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink
          className="hover:underline underline-offset-8"
          to="/addproducts"
        >
          <h2>Add Products</h2>
        </NavLink>
        <NavLink className="hover:underline underline-offset-8" to="/cart">
          <h2>My Cart</h2>
        </NavLink>
        <NavLink className="hover:underline underline-offset-8" to="/contactus">
          <h2>Contact US</h2>
        </NavLink>

        <NavLink className="hover:underline underline-offset-8" to="/signup">
          <h2>Sign Up</h2>
        </NavLink>
      </div>

      <div className=" md:pl-96 mt-2">
        {" "}
        {user ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <NavLink to="/cart">My Cart</NavLink>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/signIn">
            <button className="btn text-black rounded-none">Login</button>
          </NavLink>
        )}
      </div>

      {/* <div>
        {user ? (
          <div className="">
            {" "}
            <div className="flex">
              <div className="flex">
                <div className=" ">
                  <img className="w-10 rounded-full" src={user.photoURL} />
                </div>
                <div>
                  <p className="mr-2 mt-2">{user.displayName}</p>{" "}
                </div>
              </div>

              <div>
                <button
                  onClick={handleSignOut}
                  className="btn bg-black text-white border-yellow-400 rounded-none w-30"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-black text-white border-yellow-400 rounded-none">
              Login
            </button>
          </NavLink>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;

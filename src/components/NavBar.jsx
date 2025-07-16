import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { DiCode } from "react-icons/di";
import { LuMessagesSquare } from "react-icons/lu";

function NavBar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    navigate("/feed");
  };

  return (
    <>
      <div className="navbar bg-base-300 px-6 flex justify-between z-[99999] relative">
        <div
          onClick={handleClick}
          className="flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="text-5xl animate-pulse text-indigo-600 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]">
            <DiCode />
          </span>

          <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent animate-slide-in">
            TechMate
          </span>
        </div>

        {user && (
          <div className="flex-none gap-2 justify-center items-center">
            <div className="dropdown dropdown-end relative z-[99999]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User" src={user?.data?.photoUrl} />
                </div>
              </div>

              {/* 👇 Fixed-position dropdown for glitch-free behavior */}
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 p-2 shadow z-[99999]"
                style={{ position: "fixed", top: "60px", right: "30px" }}
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connections" className="justify-between">
                    Connections
                  </Link>
                </li>
                <li>
                  <button>Settings</button>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>

            <Link
              to="/requests"
              className="btn btn-ghost btn-circle transition-all hover:scale-105 duration-500"
            >
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </Link>

            <Link
              to="/chat"
              className="text-3xl font-semibold transition-all hover:scale-105 duration-300 text-gray-400 rounded-full p-1"
            >
              <LuMessagesSquare />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;

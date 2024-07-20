import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navMenuOptions = ["Home", "Puja", "Panchang", "Temples", "Library"];

const Navbar = () => {
  const [profileStatus, setProfileStatus] = useState(false);
  const [currentPath, setCurrentPath] = useState("Home");
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (path === "/bookpuja") {
      setCurrentPath("Puja");
    } else if (path === "/") {
      setCurrentPath("Home");
    } else {
      setCurrentPath("undefined");
    }
  }, []);

  const navigateNav = (each: string) => {
    if (each === "Home") {
      navigate("/");
    } else if (each === "Puja") {
      navigate("/bookpuja");
    }
  };

  return (
    <header className="sticky top-0  z-20 ">
      <nav className=" px-2   min-[1289px]:px-0 py-3 min-w-screen flex justify-center bg-white border-solid border-b border-gray-200 ">
        <div className=" w-full  max-w-screen-xl flex justify-between items-center ">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src="https://project-nxt.b-cdn.net/navbar-logo.svg" />
          </div>

          <div className="hidden md:flex md:flex-row  md:items-center">
            {navMenuOptions.map((each: string, index: number) => (
              <h1
                onClick={() => navigateNav(each)}
                key={index}
                className={
                  each === currentPath
                    ? "text-orange-500 mr-5 cursor-pointer hover:text-orange-500"
                    : "text-black mr-5 cursor-pointer hover:text-orange-500"
                }
              >
                {each}
              </h1>
            ))}
          </div>

          <div
            className={
              (!profileStatus ? "hidden" : "flex") +
              " absolute w-full max-w-screen-xl top-[90%] m-2 flex justify-end"
            }
          >
            <div className=" h-auto w-60  bg-white">
              <div className="border-b border-gray-200 p-3">
                <h1 className="text-slate-500 text-md">
                  Hello, Sri Mandir Bhakt
                </h1>
                <p className="text-slate-500 mt-2 text-sm">
                  {" "}
                  Welcome to Sri Mandir Puja Seva
                </p>
              </div>
              <div className="p-3">
                <p className="text-sm text-slate-500">Account Details</p>
                <div className=" cursor-pointer flex items-center mt-4 mb-2">
                  <img
                    className="mr-3"
                    src={"https://project-nxt.b-cdn.net/user-profile.svg"}
                  />
                  <h1 className="text-sm font-medium">My Profile</h1>
                </div>
                <div
                  onClick={() => {
                    navigate("/yourpuja");
                  }}
                  className=" cursor-pointer flex items-center mt-4 mb-2"
                >
                  <img
                    className="mr-3"
                    src={"https://project-nxt.b-cdn.net/puja-history.svg"}
                  />
                  <h1 className="text-sm font-medium">My Puja Bookings</h1>
                </div>
                <div
                  onClick={() => {
                    navigate("/bookpuja");
                  }}
                  className=" cursor-pointer flex items-center mt-4 mb-2"
                >
                  <img
                    className="mr-3"
                    src={"https://project-nxt.b-cdn.net/book-puja.svg"}
                  />
                  <h1 className="text-sm font-medium">Book a Puja</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className=" hidden lg:flex lg:items-center cursor-pointer mr-5 px-3 py-2 border-solid border rounded-md border-slate-300">
              <p>English</p>
              <RiArrowDropDownLine size={20} />
            </div>
            <div className=" lg:hidden flex items-center cursor-pointer mr-3 p-2 w-10 border-solid border rounded-full border-slate-300">
              <p>En</p>
            </div>
            <button onClick={() => setProfileStatus((prev) => !prev)}>
              <img src="https://project-nxt.b-cdn.net/navbar-profile.svg" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

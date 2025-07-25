import { CrossIcon } from "../icons/CrossIcon";
import { Logo } from "../icons/Logo";
import { LogoutIcon } from "../icons/LogoutIcon";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";

export function Sidebar({onClick}:{onClick?:()=>void}) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  }

  return (
    <div className="h-screen bg-white border-r border-gray-300 w-76 fixed left-0 right-0 pl-6 dark:bg-gray-900 dark:text-white">
      
      {/* croos icon for sm screen */}
      <div className=" md:hidden flex justify-end mx-10 my-5 " >
        <div className="inline-block rounded-full bg-gray-500 p-2 hover:bg-purple-700 cursor-pointer duration-300 ease-in-out" onClick={onClick}>
          <CrossIcon/>
        </div>
        </div>
        {/*  */}
      <div
        className="flex text-gray-700 text-2xl font-bold pt-4 items-center dark:text-white cursor-pointer "
        onClick={() => navigate("/dashboard")}
      >
        <div className="pr-2 text-purple-800">
          <Logo />
        </div>
        Brainly
      </div>
      <div className="pt-8 pl-2">
        <SidebarItem text="Twitter" icon={<XIcon />} />
        <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
        <SidebarItem
          text="Logout"
          icon={<LogoutIcon />}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { SearchItem } from "../components/SearchItem";
import { Moon } from "../icons/Moon";
import { Sun } from "../icons/Sun";
import { HamburgerIcon } from "../icons/HamburgerIcon";

export function Dashboard() {
  const firstName = localStorage.getItem("name")
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

   const [sidebarOpen, setSidebarOpen] = useState(false); 

  const [darkmode, setdarkmode] = useState(
        localStorage.getItem("darkmode") || "light"
  )


  const toggleMode = ()=>{
    const theme = darkmode === "light" ? "dark":"light"
    setdarkmode(theme);
    localStorage.setItem("darkmode", theme);
    document.documentElement.classList.toggle("dark", theme === "dark")
    // setdarkmode(!darkmode)
  }
  //on mount seting <html> class based on saved theme
  useEffect(()=>{
    document.documentElement.classList.toggle("dark", darkmode == "dark")
  }, [darkmode])

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div >
      <div className="hidden md:block"><Sidebar />
        </div>

      <div className="p-4 md:ml-72 min-h-screen bg-gray-100 dark:bg-gray-900">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 pr-8">

          {/* responsive nav for mobile screens */}
          <div className="md:hidden flex pl-4 justify-between sm:flex-row gap-2 md:w-auto">
            {
              sidebarOpen == true ? <Sidebar onClick={()=>setSidebarOpen(false)}/> : null
            }
            <div className=" bg-gray-500 p-2 dark:text-white hover:shadow-md hover:shadow-gray-500/80 rounded-full transition-shadow cursor-pointer" onClick={()=> setSidebarOpen(true)}>
             <HamburgerIcon />
            </div>
            <div>
          <h3 className="pl-4 mr-auto dark:text-white">
            Hi <span className="text-purple-600 text-xl font-bold ">{firstName}</span>
          </h3>
         </div>
            <div className=" pl-2 dark:text-white hover:shadow-md hover:shadow-gray-500/80 rounded-full transition-shadow">

          {
            darkmode === "dark" ? <Sun onClick={toggleMode}/> : <Moon onClick={toggleMode}/>
          }
          </div>
        </div>

        {/*  */}
            
            <h3 className="pl-4 mr-auto dark:text-white hidden md:block">
            Hi <span className="text-purple-600 text-xl font-bold ">{firstName}</span>
          </h3>
          <div className=" pl-2 dark:text-white hover:shadow-md hover:shadow-gray-500/80 rounded-full transition-shadow hidden md:block">

          {
            darkmode === "dark" ? <Sun onClick={toggleMode}/> : <Moon onClick={toggleMode}/>
          }
          </div>

          <div className="flex pl-4 justify-between sm:flex-row gap-2 md:w-auto">
          <Button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              // console.log(response)
              const shareUrl = `https://brainly-backend-xv4q.onrender.com/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            varient="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            varient="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          </div>
        </div>
        <SearchItem />
        <div className="flex gap-4 flex-wrap p-4">
          {contents.map(({ type, link, title }) => (
            <Card title={title} type={type} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

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

export function Dashboard() {
  const firstName = localStorage.getItem("name")
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

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

  // useEffect(()=>{
  //   if(darkmode){
  //   document.documentElement.setAttribute("data-theme", "dark")
  //   }
  //   else{
  //         document.documentElement.setAttribute("data-theme", "")

  //   }
  // },[])

  return (
    <div className="dark:bg-gray-900">
      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 dark:bg-gray-900">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4 pr-8">
          <h3 className="pl-4 mr-auto">
            Hi <span className="text-purple-600 text-xl font-bold ">{firstName}</span>
          </h3>
          {
            darkmode === "dark" ? <Sun onClick={toggleMode}/> : <Moon onClick={toggleMode}/>
          }
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

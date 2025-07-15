import type { ReactElement } from "react";

export function SidebarItem({text, icon, onClick}:{
    text:string;
    icon:ReactElement;
    onClick?:()=>void;
}){
    return(
        <div onClick={onClick} className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-300 rounded max-w-48 pl-2 dark:text-white dark:hover:bg-purple-700 hover:shadow-md hover:shadow-gray-500/80 transition-colors duration-300 ease-in-out">
            <div className="pr-2">

            {icon} 
            </div>
            <div >

             {text}
            </div>
        </div>
    )
}
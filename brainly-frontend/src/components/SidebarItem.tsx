import type { ReactElement } from "react";

export function SidebarItem({text, icon}:{
    text:string;
    icon:ReactElement;
}){
    return(
        <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-300 rounded max-w-48 pl-2">
            <div className="pr-2">

            {icon} 
            </div>
            <div >

             {text}
            </div>
        </div>
    )
}
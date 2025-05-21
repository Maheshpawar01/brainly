import { Logo } from "../icons/Logo";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return (
    <div className="h-screen bg-white border-r border-gray-300 w-76 fixed left-0 right-0 pl-6">
        <div className="flex text-gray-700 text-2xl font-bold pt-4 items-center">
            <div className="pr-2 text-purple-800">
            <Logo />

            </div>
            Brainly
        </div>
        <div className="pt-8 pl-2">
            <SidebarItem text="Twitter" icon={<XIcon/>}/>
            <SidebarItem text="YouTube" icon={<YoutubeIcon/>}/>
        </div>
    </div>
    )
}
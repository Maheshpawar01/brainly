import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType{
    Youtube= "youtube",
    Twitter="twitter"
}

export function CreateContentModal(props:any){
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentType.Youtube)


    const addContent=async()=>{
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        props.onClose();

    }

    return <div>
        {props.open && <div className="w-screen h-screen bg-gray-400/60 fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center" >
                <span className="p-4 bg-white rounded">
                    <div className="flex justify-end cursor-pointer">
                        <div onClick={props.onClose}>

                        <CrossIcon/>
                        </div>
                    </div>
               

                <div className="my-4">
                    <InputBox reference={titleRef} placeholder= {"title"} />
                    <InputBox reference={linkRef} placeholder= {"link"}  />
                </div>
                <div>
                    <h2>Types </h2>
                    <div className="flex gap-4 py-2">
                    <Button text="Youtube" varient={type === ContentType.Youtube ? "primary" : "secondary"} onClick={()=>{
                        setType(ContentType.Youtube)
                    }} />

                    <Button text="Twitter" varient={type === ContentType.Twitter ? "primary" : "secondary"} onClick={()=>{
                        setType(ContentType.Twitter)
                    }} />
                    </div>
                </div>
                <div className="flex justify-center items-center">

                <Button onClick={addContent} varient="primary" text="submit"/>
                </div>
                 </span>
            </div>
            </div>
            }
    </div>
}



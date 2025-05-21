import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";


export function CreateContentModal(props:any){

    return <div>
        {props.open && <div className="w-screen h-screen bg-red-200/60 fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center" >
                <span className="p-4 bg-white rounded">
                    <div className="flex justify-end cursor-pointer">
                        <div onClick={props.onClose}>

                        <CrossIcon/>
                        </div>
                    </div>
               

                <div className="my-4">
                    <InputBox placeholder= {"title"}  />
                    <InputBox placeholder= {"link"}  />
                </div>
                <div className="flex justify-center items-center">

                <Button varient="primary" text="submit"/>
                </div>
                 </span>
            </div>
            </div>
            }
    </div>
}



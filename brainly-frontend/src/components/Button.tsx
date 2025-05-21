import type { ReactElement } from "react";

interface ButtonProps{
    varient:"primary" | "secondary";
    text:string
    startIcon?:ReactElement;
    onClick?:()=>void
}

const variantClasses = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}

const defaultStyles = "px-3 py-2 rounded-md font-light flex items-center"

export function Button(props:ButtonProps){
    return <button onClick={props.onClick} className={`${variantClasses[props.varient]} ${defaultStyles} cursor-pointer `}>
              {props.startIcon ? (
        <span className="pr-2">
          {props.startIcon}
        </span>
      ) : null}{props.text}
         </button>

}
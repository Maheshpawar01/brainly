import type { ReactElement } from "react";

interface ButtonProps{
    varient:"primary" | "secondary";
    text:string
    startIcon?:ReactElement
}

const variantClasses = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}

const defaultStyles = "px-3 py-2 rounded-md"

export function Button(props:ButtonProps){
    return <button className={variantClasses[props.varient]}>{props.text}</button>

}
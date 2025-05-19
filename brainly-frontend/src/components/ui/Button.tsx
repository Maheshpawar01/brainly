
export interface ButtonProps{
    varient:"primary"| "secondary";
    size:"sm"| "md" | "lg";
    text:string;
    startIcon:any;
    endIcon:any;
    onClick:()=>void;

}
const variantStyles = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}

const sizeStyles = {
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

const defaultStyles = "rounded-md flex"

export const Button = (props: ButtonProps)=>{
return <button className={`${variantStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]}`} >{props.startIcon} {props.text} {props.endIcon}</button>
}
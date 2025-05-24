interface inputPros{
    type?:string;
    placeholder:string;
    reference?:any;
}

export function InputBox({ type = "text", placeholder, reference}: inputPros){
    return (
        <div>
            <input type={type} ref={reference} placeholder={placeholder} className="w-full bg-transparent outline-none" />
        </div>
    )
}
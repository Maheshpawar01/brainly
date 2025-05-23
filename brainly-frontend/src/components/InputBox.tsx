interface inputPros{
    type?:string;
    placeholder:string;
    onChange?:()=> void;
}

export function InputBox({ type = "text", placeholder, onChange}: inputPros){
    return (
        <div>
            <input type={type} onChange={onChange} placeholder={placeholder} className="w-full bg-transparent outline-none" />
        </div>
    )
}
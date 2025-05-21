

export function InputBox({onChange, placeholder}:{onChange?:()=>void; placeholder:string}){
    return (
        <div>
            <input type="text" className="px-4 py-2 my-2 border rounded" onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
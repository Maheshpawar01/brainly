

export function CreateContentModal(open, onClose){

    return <div>
        {open && <div className="w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-60">
            </div>
            }
    </div>
}
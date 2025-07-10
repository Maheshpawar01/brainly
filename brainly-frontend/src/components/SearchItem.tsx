import { InputBox } from './InputBox'

export function SearchItem() {
  return (

        <div className="w-full flex flex-col gap-3 pl-4 py-4 pr-8">
              <div className="w-full flex items-center bg-gray-300 p-2 rounded-xl gap-2">
                <span className="text-gray-800 pt-1">
                  {/* <FingerIcon /> */}
                </span>
                <div className="flex-1">
                  <InputBox
                    // reference={passwordRef}
                    // type={showPassword ? "password" : "text"}
                    placeholder="Search here"
                  />
                </div>
                <span className="text-gray-800 pt-1 cursor-pointer">
                  {/* {showPassword ? (
                    <OpeneyeIcon onClick={togglePassword} />
                  ) : (
                    <ClosedeyeIcon onClick={togglePassword} />
                  )} */}
                </span>
              </div>
            </div>
  )
}

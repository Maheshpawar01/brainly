import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { LinkIcon } from "../icons/LinkIcon";
import { TextIcon } from "../icons/TextIcon";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal(props: any) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    props.onClose();
  };

  return (
    <div>
      {props.open && (
        <div className="w-screen h-screen bg-gray-400/60 fixed top-0 left-0 flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <div className="w-[500px] p-4 bg-white rounded-xl">
              <div className="flex justify-end cursor-pointer">
                <div className="bg-gray-300 p-1 hover:bg-purple-700 hover:text-white hover:shadow-md hover:shadow-gray-500/80 rounded-full transition-shadow" onClick={props.onClose}>
                  <CrossIcon />
                </div>
              </div>

              <div className="my-4">
                {/* title input */}
                <div className="w-full flex flex-col gap-3 mb-2">
                  <div className="w-full flex items-center bg-gray-300 p-2 rounded-xl gap-2">
                    <span className="text-gray-800 pt-1">
                      <TextIcon />
                    </span>
                    <div className="flex-1">
                      <InputBox
                        reference={titleRef}
                        type="text"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                </div>

                {/* Link Input */}
                <div className="w-full flex flex-col gap-3">
                  <div className="w-full flex items-center bg-gray-300 p-2 rounded-xl gap-2">
                    <span className="text-gray-800 pt-1">
                      <LinkIcon />
                    </span>
                    <div className="flex-1">
                      <InputBox
                        reference={linkRef}
                        type="text"
                        placeholder="Link"
                      />
                    </div>
                  </div>
                </div>
              </div>
                      <div className="relative w-full flex items-center justify-center">
          <div className="w-2/3 h-[2px] bg-gray-900"></div>
          <h3 className="text-lg md:text-md px-1 text-gray-800 font-bold">Types</h3>
          <div className="w-2/3 h-[2px] bg-gray-900"></div>
        </div>

              <div>
                <div className="flex items-center justify-evenly gap-4 py-2 my-2">
                  <Button
                    text="Youtube"
                    varient={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  />

                  <Button
                    text="Twitter"
                    varient={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button onClick={addContent} varient="primary" text="submit" fullWidth={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

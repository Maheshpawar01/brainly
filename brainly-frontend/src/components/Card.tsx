import { ShareIcon } from "../icons/ShareIcon";
import { useEffect, useRef } from "react";

interface cardProps{
    title:string;
    link: string;
    type:"twitter" | "youtube"
}
declare global {
  interface Window {
    twttr?: any;
  }
}

export function Card(props: cardProps){
     const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.type === "twitter") {
      // Check if the widgets.js script is already included
      if (!window.twttr) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          window?.twttr?.widgets.load(twitterRef.current);
        };
        document.body.appendChild(script);
      } else {
        // If script is already present, just call widgets.load
        window?.twttr?.widgets.load(twitterRef.current);
      }
    }
  }, [props.link, props.type]);

    return <div className=" p-4 bg-white rounded-md shadow-md border border-gray-200 max-w-72 min-w-72 m-w-48 ">


        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="pr-2 text-gray-500">
                <ShareIcon/>
                </div>
                {props.title}
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500">
                    <a href={props.link} target="_blank">

                <ShareIcon/>
                    </a>
                </div>
                <div className=" text-gray-500">
                <ShareIcon/>
                </div>
            </div>
        </div>

        <div className="pt-4">
            {props.type === "youtube" && 
        <iframe className="w-full" src={props.link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }

            {props.type === "twitter" &&
        <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a> 
        </blockquote>
}
        </div>
    </div>
}
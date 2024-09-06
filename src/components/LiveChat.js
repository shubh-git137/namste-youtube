import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API POLLIING");
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2  h-[500px] border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <div className="border border-black w-full p-2 ml-2 mt-2">
        <input className="w-64" />
        <button className={"px-2 mx-2 bg-green-200"} >Send</button>
      </div>
    </>
  );
};
export default LiveChat;

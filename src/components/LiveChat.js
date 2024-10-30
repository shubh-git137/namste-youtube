import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="">
        <div className="ml-2 p-2 h-[500px] border border-black overflow-x-hidden bg-slate-100 overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
        <hr className="p-2 "></hr>
        <form className="border border-black w-full p-2 ml-2 mt-2" onSubmit={(e) => {e.preventDefault()
          dispatch(
            addMessages({
              name: "Shubham Tiwari",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }
         
        }>
          <input
            className="w-64"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className={"px-2 mx-2 bg-green-200"}>Send</button>
        </form>
      </div>
    </>
  );
};
export default LiveChat;

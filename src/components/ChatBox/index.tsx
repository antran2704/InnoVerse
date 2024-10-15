"use client";

import clsx from "clsx";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ChatBox = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div
        onClick={onShow}
        className="fixed cursor-pointer right-2 bottom-20 rounded-full z-[998]">
        <img
          src="/images/chat_box.png"
          alt="chat box"
          title="chat box"
          width={100}
          height={100}
          className="w-12 h-12"
        />
      </div>
      <div
        className={clsx(
          "fixed bottom-0 transition-all ease-linear duration-100 z-[998]",
          [show ? "right-0" : "-right-full"],
        )}>
        <button
          onClick={onShow}
          className="absolute -left-8 top-1/2 -translate-y-1/2">
          <MdOutlineKeyboardArrowLeft className="text-5xl" />
        </button>
        <iframe
          src="http://152.42.223.155/chatbot/REJ5qUxi3z9r3YoG"
          className={clsx(
            "h-full md:w-[600px] sm:min-h-[600px] sm:w-[400px] w-[360px] min-h-[500px] border shadow-lg rounded-lg overflow-hidden",
          )}
          allow="microphone"
        />
      </div>
    </div>
  );
};

export default ChatBox;

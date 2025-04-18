"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.png";
import content2 from "../../public/content2.webp";
import { SlArrowDown } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SiLivechat } from "react-icons/si";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="items-center justify-items-center bg-white">
      {/* navigator */}
      <div className="bg-white w-screen h-8 flex items-center justify-center text-[#888888]">
        <MdOutlineRemoveRedEye />
        <span className="ml-2 text-sm">If you see it, You Need it - Book an eyetest</span>
      </div>

      {/* logo section */}
      <div className="bg-[#222222] w-screen h-20 flex items-center justify-between text-m pl-2">
        <Image src={logo} alt="Logo" className="h-12 w-auto" />

        <div>Glasses</div>
        <SlArrowDown />
        <div>Sunglasses</div>
        <SlArrowDown />
        <div>Contact Lenses</div>
        <SlArrowDown />
        <div>Eye Health</div>
        <SlArrowDown />
        <div>Offer</div>
        <div className="flex ">
          <div className="pt-1">Locations</div>
          <div className="w-8 h-8 bg-[#007A8A] ml-4 rounded-full flex items-center justify-center">
            <SlMagnifier className="text-white" />
          </div>
        </div>

        <div>SIGN IN</div>
        <div className="flex items-center justify-center">
          <div>BAG</div>
          <div className="ml-2">
            <SlHandbag />
          </div>
        </div>

        <div className="text-lg bg-[#007A8A] h-full py-6">
          <span className="px-5">BOOK AN EYE TEST</span>
        </div>
      </div>
      <div className="h-auto w-auto">
        <Image src={content2} alt="Logo" />
      </div>

      {/* content1 */}
      <div className="mt-20">
        <div className="text-3xl text-[#888888]">BEST SELLERS</div>
      </div>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="w-20 h-12 bg-[#007A8A] cursor-pointer rounded-2xl flex items-center justify-center"
          onClick={() => setShowChat(true)}
        >
          <SiLivechat className="text-white w-8 h-auto" />
        </button>
      </div>

      {/* Chatbot Box(after clicked the button) */}
      {showChat && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-white border border-gray-300 shadow-xl rounded-lg p-4 z-50 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-bold">Chat with us!</div>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-700 text-xs"
            >
              ✕
            </button>
          </div>
          <div className="h-64 overflow-y-auto border rounded mb-2 p-2 text-sm text-gray-700">
            👋 Hi! How can I help you today?
          </div>
          <input
            type="text"
            className="w-full border p-2 rounded text-sm"
            placeholder="Type a message..."
          />
        </div>
      )}
    </div>
  );
}

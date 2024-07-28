/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-my-grey-900">
      <div className="w-[350px] h-auto flex flex-col items-center gap-y-3 bg-my-grey-800 rounded-lg p-[25px] font-inter">
        <div className="w-[100%] flex flex-col items-center justify-center gap-y-2">
          <img src="./assets/images/avatar-jessica.jpeg" alt="" className="w-20 h-20 rounded-full"/>
          <h3 className="text-my-white capitalize font-medium text-2xl">jessica randall</h3>
          <p className="text-xs capitalize text-my-green font-medium">london, united kingdom</p>
        </div>
        <div className="flex flex-col gap-y-4 w-[100%]">
          <p className="text-my-white text-center font-normal text-[13px]">&quot; Front-end developer and avid reader.&quot;</p>
          <div className="">
            <a href="#"><button className="w-[100%] h-[20px] p-5 flex items-center justify-center bg-my-grey-700 text-my-white font-semibold text-sm rounded-md hover:bg-my-green hover:cursor-pointer hover:text-my-grey-800 transition-none ease-linear duration-[.5s] my-2">GitHub</button></a>
            <a href="#"><button className="w-[100%] h-[20px] p-5 flex items-center justify-center bg-my-grey-700 text-my-white font-semibold text-sm rounded-md hover:bg-my-green hover:cursor-pointer hover:text-my-grey-800 transition-none ease-linear duration-[.5s] my-3">Frontend Mentor</button></a>
            <a href="#"><button className="w-[100%] h-[20px] p-5 flex items-center justify-center bg-my-grey-700 text-my-white font-semibold text-sm rounded-md hover:bg-my-green hover:cursor-pointer hover:text-my-grey-800 transition-none ease-linear duration-[.5s] my-3">Likedin</button></a>
            <a href="#"><button className="w-[100%] h-[20px] p-5 flex items-center justify-center bg-my-grey-700 text-my-white font-semibold text-sm rounded-md hover:bg-my-green hover:cursor-pointer hover:text-my-grey-800 transition-none ease-linear duration-[.5s] my-3">Twitter</button></a>
            <a href="#"><button className=" w-[100%] h-[20px] p-5 flex items-center justify-center bg-my-grey-700 text-my-white font-semibold text-sm rounded-md hover:bg-my-green hover:cursor-pointer hover:text-my-grey-800 transition-none ease-linear duration-[.5s] mt-3">Instagram</button></a>
          </div>
        </div>
      </div>
    </main>
  );
}

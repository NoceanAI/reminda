"use client";
import { montserrat } from "../assets/fonts";
import { useRouter } from "next/navigation";
import NavBar from "./NavBar";

const StartPage = () => {
  const nav = useRouter();

  return (
    <main className="min-h-screen bg pt-8">
      <NavBar />

      <div
        className={`${montserrat.className}  w-[100%] pt-[35%] md:pt-[20%] lg:pt-[15%] pl-[3%]`}
      >
        <div className="w-[324px] text-white lg:w-[500px] mx-auto text-[24px] text-center">
          <p className={`font-[700] leading-normal`}>
            Watch exclusive Skits, Movies, Shows, Concerts and more from your
            favorite Tribers
          </p>
          <button
            onClick={() => nav.push("/register")}
            className="mt-6 text-[16px] hover:bg-[#ffffff95] h-[48px] w-[161px] bg-white text-[#000] rounded"
          >
            Get started
          </button>
        </div>
      </div>
    </main>
  );
};

export default StartPage;

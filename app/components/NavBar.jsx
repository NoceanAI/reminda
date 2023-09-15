"use client";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

const NavBar = () => {
  const nav = useRouter();
  return (
    <nav className="w-full py-3">
      <div className="max-w-[90%] flex justify-between mx-auto">
        <Logo />
        <button
          onClick={() => nav.push("/login")}
          className="text-[16px] h-[40px] hover:bg-[#ffffff95] w-[94px] bg-white text-[#000] rounded"
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

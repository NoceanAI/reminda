"use client";

import { useRouter } from "next/navigation";
export default function RootLayout({ children }) {
  const nav = useRouter();
  return (
    <html lang="en">
      <body className={"bg-[#F9FAFC]"}>
        <nav className="w-[150px] border-r min-h-screen fixed bg-[#2C44EC] text-white p-2">
          <h1
            className="cursor-pointer text-[16px] font-bold"
            onClick={() => nav.push("/")}
          >
            Remind
          </h1>

          <div className="mt-[50px]">
            <p
              className="text-[12px] cursor-pointer"
              onClick={() => nav.push("/dashboard")}
            >
              Dashboard
            </p>

            <h4 className="mt-[50px] text-[14px] font-bold">Modules</h4>
            <p
              className="text-[12px] cursor-pointer"
              onClick={() => nav.push("/dashboard/employee-manager")}
            >
              Employee Manager
            </p>
          </div>
        </nav>
        <div className="ml-[150px]">
          <div className="h-[60px] border-b"></div>
          {children}
        </div>
      </body>
    </html>
  );
}

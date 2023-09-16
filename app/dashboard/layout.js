"use client";

import { useRouter } from "next/navigation";
import Logo from "../components/Logo";

export default function RootLayout({ children }) {
  const nav = useRouter();
  return (
    <html lang="en">
      <body className={"bg-[#F9FAFC]"}>
        <nav className="w-[150px] border-r min-h-screen fixed bg-white p-2">
          <h1 onClick={() => nav("/")}>Remind</h1>
        </nav>
        <div className="ml-[150px]">{children}</div>
      </body>
    </html>
  );
}

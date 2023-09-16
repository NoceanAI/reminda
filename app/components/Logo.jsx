import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "app/assets/images/logo.svg";

const Logo = (href = "/") => {
  return (
    <Link className="cursor-pointer" href={href}>
      {/* <Image width={105} height={45} src={logo} alt="logo" />
       */}
      <h1
        style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Reminda
      </h1>
    </Link>
  );
};

export default Logo;

import React from "react";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.png"
      width={160}
      height={40}
      className={`inline-block ${className}`}
      alt="logo"
    />
  );
};

export default Logo;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={160}
        height={40}
        className={`inline-block ${className}`}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;

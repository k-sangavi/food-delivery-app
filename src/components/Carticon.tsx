import Link from "next/link";
import React from "react";
import Image from "next/image";

const Carticon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="cart" fill sizes="(max-width:768px) 100vw, 50vw" />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default Carticon;

import React from "react";
import Image from "next/image";
import cart from "../../public/assets/cart.png";

const MenuPage = () => {
  return (
    <>
      <Image src={cart} alt="Cart" width={100} height={100} />
    </>
  );
};

export default MenuPage;

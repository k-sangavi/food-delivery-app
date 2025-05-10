import Link from 'next/link'
import React from 'react'
import Image from "next/image"

const Carticon = () => {
  return (
   <Link href="/cart">
    <div className='relative w-8 h-8'>
        <Image src="/cart.png" alt=""fill/>
    </div>
    <span>Cart (3)</span>
   </Link>
  )
}

export default Carticon
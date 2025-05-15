import { featuredProducts } from "@/data";
import SingleProductPage from "@/product/SingleProductpage";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full h-[300px] hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" sizes="60vw" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>

               <SingleProductPage /> 
              <div className="flex space-x-2">
                {item.options &&
                  item.options.map((option, index) => (
                    <span key={index} className="badge bg-grey-200 rounded px-2 py-1 text-sm">
                      {option.title}
                    </span>
                  ))}
              </div>

              <button className="bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

// //  "use client"
// import { featuredProducts } from "@/data";
// import Image from "next/image";
// import React from "react";
// // import { useState } from "react";

// const Featured = () => {
//   // function QuantitySelector() {
//   //   const [quantity, setQuantity] = useState(1);

//   //   const handleDecrease = () => {
//   //     if (quantity > 1) {
//   //       setQuantity(quantity - 1);
//   //     }
//   //   };

//   //   const handleIncrease = () => {
//   //     setQuantity(quantity + 1);
//   //   };

//   return (
//     <div className="w-screen overflow-x-scroll text-red-500">
//       {/* WRAPPER */}
//       <div className="w-max flex">
//         {/* SINGLE ITEM */}
//         {featuredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
//           >
//             {/* IMAGE CONTAINER */}
//             {item.img && (
//               <div className="relative w-full h-[300px] hover:rotate-[60deg] transition-all duration-500">
//                 <Image src={item.img} alt="" fill className="object-contain" sizes="60vw" />
//               </div>
//             )}
//             {/* TEXT CONTAINER */}
//             <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
//               <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
//               <p className="p-4 2xl:p-8">{item.desc}</p>
//               <span className="text-xl font-bold">${item.price}</span>

//               <div className="flex space-x-2">
//                 {item.options &&
//                   item.options.map((option, index) => (
//                     <span key={index} className="badge bg-gray-200 rounded px-2 py-1 text-sm">
//                       {option.title}
//                     </span>
//                   ))}
//               </div>
//               {/* <div className="flex items-center space-x-2">
//                   <button onClick={handleDecrease} className="bg-gray-300 text-black p-2 rounded-md">
//                     -
//                   </button>
//                   <span className="px-4">{quantity}</span>
//                   <button onClick={handleIncrease} className="bg-gray-300 text-black p-2 rounded-md">
//                     +
//                   </button>
//                   <button className="bg-red-500 text-white p-2 rounded-md ml-4">Add to Cart</button>
//                 </div> */}
//               <button className="bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// // };

// export default Featured;

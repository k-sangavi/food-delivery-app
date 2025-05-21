import Cartpage from "@/cart/Cartpage";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Loginpage from "@/login/Loginpage";
import OrdersPage from "@/orders/Ordesrpage";

export default function Home() {
  return (
    <>
      <Slider />
      <Featured />
      <Offer />
      <OrdersPage/>
      <Loginpage/>
      <Cartpage/>
    </>
  );
}





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import OrdersPage from './OrdersPage';

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <Link to="/orders">View Orders</Link>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/orders" element={<OrdersPage />} />
//       </Routes>
//     </Router>
//   );
// }
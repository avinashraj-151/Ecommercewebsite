import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;

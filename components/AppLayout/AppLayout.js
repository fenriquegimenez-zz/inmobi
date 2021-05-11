import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <main className="container">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;

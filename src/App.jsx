import React from "react";
import Navbar from "./assets/componenets/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Users from "./assets/pages/user/Users";
import User from "./assets/pages/user/User";
import Home from "./assets/pages/home/Home";
import AddUser from "./assets/pages/user/AddUser";
import Footer from "./assets/componenets/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/User" element={<User />} />
        <Route path="/user/add" element={<AddUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

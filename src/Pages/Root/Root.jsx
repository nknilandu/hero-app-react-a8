import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

export default function Root() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}
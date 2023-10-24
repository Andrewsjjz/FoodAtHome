import { Outlet, } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {


  return (
    <>
      <div>
      <Header/>
      </div>
      <main className="relative z-0 top-[130px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

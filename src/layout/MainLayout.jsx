import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Toaster />
      <Outlet />
    </div>
  );
};

export default MainLayout;

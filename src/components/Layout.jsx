// import { Outlet } from "react-router-dom";
// import Header from "./header";
// import Footer from "./footer";
// import { useSelector } from "react-redux";

// const Layout = () => {
//   const role = useSelector((state) => state.auth.role);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const showHeaderFooter = role === "customer" || !isAuthenticated;

//   return (
//     <div>
//       {showHeaderFooter && <Header />}
//       <main>
//         <Outlet />
//       </main>
//       {showHeaderFooter && <Footer />}
//     </div>
//   );
// };

// export default Layout;
//=======================================
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const location = useLocation();
  const userRole = useSelector((state) => state.auth.role);
  // Check if the current path is '/dashboard' or starts with '/dashboard'
  const isDashboardPath = location.pathname.includes("/dashboard");

  // Determine whether to show Header and Footer
  const showHeaderFooter = !isDashboardPath || userRole === "customer";

  return (
    <div>
      {showHeaderFooter && <Header />}
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;

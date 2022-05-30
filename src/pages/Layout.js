import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Layout.css";



const Layout = () => {



  return (
    
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Pocetna</Link>
            </li>
            <li>
              <Link to="/calendar">Kalendar</Link>
            </li>
            <li>
              <Link to="/calculator">Kalkulator</Link>
            </li>
           
          </ul>
        </nav>

        <Outlet />
      </>
    
  );
};

export default Layout;
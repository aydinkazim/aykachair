import React from "react";

function Layout({ children }) {
  return (
    <div className="container mx-auto bg-indigo-300 ">
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;

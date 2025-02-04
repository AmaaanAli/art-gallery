import React from "react";

const NavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center space-y-2 p-2 hover:bg-teal-700 rounded cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

export default NavItem;

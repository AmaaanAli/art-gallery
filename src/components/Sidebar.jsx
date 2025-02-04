import React from "react";
import {
  Home,
  Search,
  Star,
  TrendingUp,
  PlusCircle,
  Image,
} from "lucide-react";
import NavItem from "./NavItem";

const Sidebar = () => (
  <aside className="w-40 bg-teal-900 text-white p-5 space-y-5 h-full">
    <h1 className="text-2xl font-bold text-center pt-4">LOGO</h1>
    <nav className="space-y-6">
      <NavItem icon={<Home size={20} />} label="Home" />
      <NavItem icon={<Search size={20} />} label="Explore" />
      <NavItem icon={<Star size={20} />} label="Featured" />
      <NavItem icon={<TrendingUp size={20} />} label="Trending" />
      <NavItem icon={<PlusCircle size={20} />} label="New Arrivals" />
      <NavItem icon={<Image size={20} />} label="Exhibitions" />
    </nav>
  </aside>
);

export default Sidebar;

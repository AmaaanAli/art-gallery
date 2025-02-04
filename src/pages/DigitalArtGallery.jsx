import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import GallerySection from "../components/GallerySection";
import ArtworkGrid from "../components/ArtworkGrid";
import { Phone, User as UserIcon, Bell } from "lucide-react";

const DigitalArtGallery = () => (
  <div className="flex h-full bg-teal-900">
    <Sidebar />
    <main className="flex-1 p-5 bg-teal-900">
      <div className="flex justify-end">
        <div className="space-x-4 mb-6 flex items-center">
          <Button variant="outline" icon={<Phone size={16} />}>
            Talk to Expert
          </Button>
          <Button variant="outline" icon={<UserIcon size={16} />}>
            User
          </Button>
          <Button variant="outline" icon={<Bell size={20} />} noText />
        </div>
      </div>
      <div className="rounded-xl bg-white p-4 mb-2">
        <span className="ml-15">
          Welcome Back, <strong>User</strong>
        </span>
        <GallerySection />
        <ArtworkGrid />
      </div>
    </main>
  </div>
);

export default DigitalArtGallery;

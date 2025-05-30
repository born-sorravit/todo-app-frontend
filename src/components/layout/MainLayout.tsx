import React from "react";
import Modal from "../Modal";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="flex justify-center bg-primary-surface">Navbar</div>
      <main className="">{children}</main>
      <div className="flex justify-center bg-primary-surface">
        <div className="absolute bottom-0">Footer</div>
      </div>
    </div>
  );
}

export default MainLayout;

"use client";

import DialogUI from "../components/common/Dialog";
import { Toaster } from "../components/common/Toaster";

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <>
      {children}
      <DialogUI />
      <Toaster />
    </>
  );
};

export default UIProvider;

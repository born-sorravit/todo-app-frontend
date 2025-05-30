"use client";

import { useCallback } from "react";
import { AlertDialog } from "../ui/alert-dialog";
import useModalStore from "@/store/modal/modal.store";
const DialogUI = () => {
  const { isOpen, close, view } = useModalStore();

  const onClose = useCallback(() => {
    if (isOpen) {
      close();
    }
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      {/* Render the dialog content by using the view prop */}
    </AlertDialog>
  );
};

export default DialogUI;

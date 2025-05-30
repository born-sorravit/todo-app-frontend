import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IToastState } from "./toast.type";

const useToastStore = create(
  devtools(
    persist<IToastState>(
      (set, get) => ({
        isOpen: false,
        toast: {},
        setOpen: (view, toast) =>
          set((state) => ({ isOpen: true, view, toast })),
      }),
      {
        name: "toast-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useToastStore;

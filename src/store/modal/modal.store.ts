import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IModalState } from "./modal.type";

const useModalStore = create(
  devtools(
    persist<IModalState>(
      (set, get) => ({
        isOpen: false,
        view: undefined,
        data: undefined,
        close: () => set((state) => ({ isOpen: false })),
        setOpen: (view) => set((state) => ({ isOpen: true, view })),
      }),
      {
        name: "modal-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useModalStore;

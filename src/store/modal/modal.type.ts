export interface IModalState {
  isOpen: boolean;
  view?: "SuccessModal" | "WarningModal" | "ErrorModal" | "DeleteModal";

  close: () => void;
  setOpen: (view: IModalState["view"]) => void;
}

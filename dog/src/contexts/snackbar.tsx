/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from "react";
import { Snackbar } from "components";

interface ISnackbar {
  addSnackbar: (
    value: string | null,
    variant: "success" | "error" | "warning"
  ) => void;
}

interface Props {
  children: React.ReactNode;
}

const SnackbarContext = React.createContext<ISnackbar>({
  addSnackbar: () => {},
});

type ToastType = { value?: string; variant: "success" | "error" | "warning" };

export const SnackbarProvider: React.FC<Props> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastType[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        3000
      );

      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addSnackbar = React.useCallback(
    (value, variant) => {
      setToasts((toasts) => [...toasts, { value, variant }]);
    },
    [setToasts]
  );

  const removeSnackbar = (_: number) => {
    const arr = [...toasts];
    arr.splice(_, 1);
    setToasts(arr);
  };

  return (
    <SnackbarContext.Provider value={{ addSnackbar }}>
      {children}
      <div className="fixed bottom-0 left-0 ml-5 mb-5 space-y-2">
        {toasts.map((it, _: number) => (
          <Snackbar
            key={it.value}
            value={it.value || ""}
            onClose={() => removeSnackbar(_)}
            variant={it.variant}
          />
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar: () => {
  addSnackbar: (
    value: string | null,
    variant: "success" | "error" | "warning"
  ) => void;
} = () => {
  const { addSnackbar } = React.useContext(SnackbarContext);

  return { addSnackbar };
};

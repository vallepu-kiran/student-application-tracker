"use client";
import { useState } from "react";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props]);
    
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== props));
    }, 3000);
  };

  return { toast, toasts };
}
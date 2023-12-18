"use client";
import { useToast } from "./useToast";
import { Button } from "../Button";
import { ToastAction } from "./Toast";

export const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "All toasters",
          description: "Toast toast!",
        });
      }}
    >
      You know what they say...
    </Button>
  );
};

export const ToastWithActionDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Update available",
          description:
            "A newer version of Foundry is available, reload to update?",
          action: <ToastAction altText="Update">Update</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
};

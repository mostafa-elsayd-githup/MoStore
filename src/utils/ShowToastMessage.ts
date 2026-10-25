import { toast } from "sonner";
export const successToastMessage = (
  welcomeMessage: string,
  icon: React.ReactNode,
) => {
  toast.success(welcomeMessage, {
    position: "bottom-right",
    icon: icon,
    duration: 4000,
    style: {
      background:
        "linear-gradient(135deg, color-mix(in srgb, var(--rating-color) 22%, var(--bg-card)), var(--bg-card))",
      color: "var(--text-h)",
      border:
        "1px solid color-mix(in srgb, var(--rating-color) 35%, var(--border_card))",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "var(--shadow)",
      borderRadius: "16px",
      width: "20rem",
    },
  });
};
export const errorToastMessage = (
  welcomeMessage: string,
  icon: React.ReactNode,
) => {
  toast.error(welcomeMessage, {
    position: "bottom-right",
    icon: icon,
    duration: 4000,
    style: {
      background:
        "linear-gradient(135deg, color-mix(in srgb, var(--color-sale) 25%, var(--bg-card)), var(--bg-card))",
      color: "var(--text-h)",
      border:
        "1px solid color-mix(in srgb, var(--color-sale) 40%, var(--border_card))",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "var(--shadow)",
      borderRadius: "16px",
      width: "20rem",
    },
  });
};

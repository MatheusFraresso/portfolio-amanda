interface IButtonProps {
  children: React.ReactNode;
  className?: HTMLButtonElement["className"];
  outline?: boolean;
  onClick?: () => void;
  hoverShadow?: boolean;
}

export default function Button({
  className,
  children,
  onClick,
  outline,
  hoverShadow,
}: IButtonProps) {
  return (
    <button
      className={`cursor-pointer hover:scale-105 transition-all " + ${className} ${
        outline ? "border rounded-[200px] px-2 py-1" : "border-none"
      }  ${hoverShadow ? "" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

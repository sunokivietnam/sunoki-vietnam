import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex h-14 items-center justify-center rounded-[14px] px-9 text-sm font-semibold tracking-[0.12em] transition-all duration-300";

  const style =
    variant === "primary"
      ? "bg-[#B8895A] text-white hover:bg-[#A77647] hover:-translate-y-0.5 hover:shadow-lg"
      : "border border-[#B8895A] text-[#B8895A] hover:bg-[#B8895A] hover:text-white";

  if (href) {
    return (
      <Link href={href} className={`${base} ${style}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${style}`}
    >
      {children}
    </button>
  );
}
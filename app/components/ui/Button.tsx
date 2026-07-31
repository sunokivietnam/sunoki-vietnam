import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "service";
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const base =
  "inline-flex h-14 min-w-[220px] items-center justify-center rounded-[14px] px-9 text-sm font-semibold tracking-[0.12em] transition-all duration-300";

 const style =
  variant === "primary"
    ? "border border-[#D8B07A] bg-[#D8B07A]/10 text-white backdrop-blur-sm hover:bg-[#D8B07A] hover:border-[#D8B07A] hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
    : variant === "secondary"
    ? "bg-[#B8895A] text-white shadow-lg hover:bg-[#A97949] hover:-translate-y-0.5 hover:shadow-xl"
    : "bg-[#8B6A43] text-white shadow-lg hover:bg-[#745733] hover:-translate-y-0.5 hover:shadow-xl";
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
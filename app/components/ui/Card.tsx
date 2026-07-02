import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[24px]
        bg-white
        shadow-[0_8px_30px_rgba(43,37,32,0.06)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_16px_40px_rgba(43,37,32,0.12)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
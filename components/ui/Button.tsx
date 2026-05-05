import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-[22px] py-[14px] text-sm font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#111111] text-white hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]",
  secondary:
    "border border-black/8 bg-black/4 text-[#111111] backdrop-blur-[6px] hover:bg-black/8",
  ghost:
    "text-forest hover:bg-transparent hover:text-forest-hover",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const disabledCls = disabled ? "pointer-events-none opacity-50" : "";
  const cls = `${base} ${variants[variant]} ${disabledCls} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

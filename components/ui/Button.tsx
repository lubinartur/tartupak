import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white shadow-none hover:bg-forest-hover focus-visible:outline-forest",
  secondary:
    "border-2 border-forest/25 bg-transparent text-foreground hover:border-forest/50 hover:bg-surface/80",
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

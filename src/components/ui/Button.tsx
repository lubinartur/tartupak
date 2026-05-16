import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green/90 border border-brand-green",
  secondary:
    "bg-brand-kraft text-brand-text hover:bg-brand-kraft/90 border border-brand-kraft",
  outline:
    "bg-transparent text-brand-green border border-brand-green hover:bg-brand-green/5",
};

const baseClass =
  "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium font-display transition-colors";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseClass, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

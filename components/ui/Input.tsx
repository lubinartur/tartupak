import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        className={`rounded-sm border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/25 ${className}`}
        {...props}
      />
    </div>
  );
}

import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
};

export function Select({ label, id, className = "", children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={id}
        className={`rounded-sm border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/25 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

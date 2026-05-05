import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** ~1200px max width per docs/23_ui_guide.md */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

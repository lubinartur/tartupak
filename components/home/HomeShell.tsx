import type { ReactNode } from "react";

export function HomeShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-10">
      {children}
    </div>
  );
}


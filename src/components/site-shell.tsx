import type { ReactNode } from "react";
import { MotionRoot } from "@/components/motion-root";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionRoot>
      <SiteHeader />
      <main className="page-enter">{children}</main>
      <SiteFooter />
    </MotionRoot>
  );
}

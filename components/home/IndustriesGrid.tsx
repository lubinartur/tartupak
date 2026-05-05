import Image from "next/image";
import Link from "next/link";
import { HomeShell } from "@/components/home/HomeShell";

const items = [
  { title: "Transport boxes", image: "/images/home/grid-1.jpg", href: "/products" },
  { title: "Pizza boxes", image: "/images/home/grid-2.jpg", href: "/products" },
  {
    title: "Frozen products packaging",
    image: "/images/home/grid-3.jpg",
    href: "/products",
  },
  { title: "Custom packaging", image: "/images/home/grid-4.jpg", href: "/contact" },
  { title: "Large packaging", image: "/images/home/grid-5.jpg", href: "/products" },
  { title: "Printed packaging", image: "/images/home/grid-6.jpg", href: "/contact" },
] as const;

export function IndustriesGrid() {
  return (
    <section className="bg-background">
      <HomeShell>
        <div className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Industries & box types
              </p>
              <h2 className="mt-3 font-heading text-[clamp(28px,3.2vw,46px)] font-[850] leading-[1.05] tracking-[-0.03em] text-foreground">
                Corrugated boxes produced for real-world handling
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-[860px] text-base leading-[1.85] text-muted">
                Choose a standard construction or send your dimensions,
                quantities and delivery requirements — we’ll manufacture the
                right corrugated packaging for your workflow.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it, idx) => (
              <Link
                key={it.title}
                href={it.href}
                className="group relative overflow-hidden rounded-[16px] border border-black/12 bg-card shadow-[0_10px_22px_rgba(0,0,0,0.07),0_1px_0_rgba(0,0,0,0.06)] transition-transform duration-200 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    className="image-industrial-tone object-cover transition-transform duration-300 ease-out group-hover:scale-[1.045]"
                    style={{
                      objectPosition: idx % 3 === 0 ? "50% 35%" : "50% 50%",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.62))",
                    }}
                    aria-hidden
                  />
                </div>

                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                      Type
                    </div>
                    <div className="mt-2 font-heading text-lg font-[850] tracking-[-0.02em] text-foreground">
                      {it.title}
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-foreground shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                    <span aria-hidden className="text-sm">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </HomeShell>
    </section>
  );
}


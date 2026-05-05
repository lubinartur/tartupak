import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { productImagePublicPath } from "@/lib/images";

const sectionY =
  "py-20 md:py-24 lg:py-[7.5rem]";

export function ProductCategories() {
  const items = PRODUCT_CATEGORIES;

  return (
    <section className={`bg-background ${sectionY}`}>
      <div className="mx-auto w-[calc(100vw-32px)] max-w-[1760px] md:w-[calc(100vw-64px)]">
        <div className="max-w-[600px]">
          <SectionHeader
            eyebrow="Products"
            title="Packaging categories"
            description="From transport and food service to custom die-cuts and large-format runs — built for B2B operations."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-5 [grid-auto-rows:1fr]">
          {items.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_18px_44px_rgba(43,43,43,0.06)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_28px_72px_rgba(43,43,43,0.12)]"
            >
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <Image
                  src={productImagePublicPath(c.slug)}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-[1.65] text-muted/90">
                  {c.description}
                </p>
                <p className="mt-auto pt-4 text-sm font-medium tracking-tight text-foreground/80">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="px-6 pt-40 pb-32 text-center lg:px-12">
      <h1 className="font-display text-4xl font-bold text-brand-green">{t("title")}</h1>
      <p className="mx-auto mt-6 max-w-md text-brand-text/80">{t("body")}</p>
      <Button href="/" className="mt-10">
        {t("cta")}
      </Button>
    </div>
  );
}

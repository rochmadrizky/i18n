import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>{t("title")}</h1>
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return <h1>eror ya gaes ya {t("")}</h1>;
}

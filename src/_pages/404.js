import useTranslation from 'next-translate/useTranslation';

export default function NotFoundErrorPage() {
  const { t, lang } = useTranslation();
  const title = t('error:title');

  return (
    <h1>
      Custom 404 Page - {title}, lang: {lang}!
    </h1>
  );
}

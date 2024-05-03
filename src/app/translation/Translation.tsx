import { useTranslations } from 'next-intl';

interface TranslationProps {
  id: string;
  namespace?: string;
}
const Translation = ({ id, namespace = 'Common' }: TranslationProps) => {
  const t = useTranslations(namespace);

  return t(id);
};

export default Translation;

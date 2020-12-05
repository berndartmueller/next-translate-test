import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function Detail(props) {
  const { t } = useTranslation()
  const router = useRouter()
  const { isFallback } = router

  if (isFallback) {
    return 'Loading...'
  }

  return (
    <Layout>
      <main>
        SSG PageL {props.slug}
      </main>


    </Layout>
  )
}

export const getStaticProps = (ctx) => {
  console.log('asdfasdf', ctx);
  return {
    props: {
      slug: ctx.params.slug || null,
    },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const paths = [];

  locales.forEach(locale => {
    paths.push({ locale, params: { slug: 'first' } });
    paths.push({ locale, params: { slug: 'second' } });
  });

  return {
    paths,
    fallback: true,
  };
};

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import '../style.scss'

import Main from '../components/Main'
import { withI18next } from '../lib/withI18next'

const Index = ({ t }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Fjalla+One|PT+Sans+Narrow|Roboto|Roboto+Slab|Sail"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {/*    <h1>{t('welcome')}</h1>
    <p>{t('common:integrates_react-i18next')}</p>
    <p>{t('sample_test')}</p>
    <div>
      <button>{t('sample_button')}</button>
    </div>
    <PureComponent t={t} />
    <ExtendedComponent />
    <ComponentWithTrans />*/}
    <Main />
    {/* <Link href="/gallery">
      <a>{t('link.gallery')}</a>
    </Link>*/}
  </div>
)

export default withI18next([
  'home',
  'common',
  'home',
  'about',
  'carousel',
  'footer',
  'header',
  'howitworks',
  'testimonials',
  'values',
])(Index)

import React from 'react'
import App, { Container } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}
    library.add(fab);



    return (
      <Container>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
        </I18nextProvider>
      </Container>
    )
  }
}

import moment from 'moment'
import React from 'react'
import ptBR from 'moment/locale/pt-br'
import { ReactQueryProvider } from './reactQuery'
import theme from './theme'
import { ThemeProvider } from 'aiq-design-system'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

const Providers = ({ children }) => {

    moment.locale('pt-br', ptBR)
    return (
        <I18nextProvider i18n={i18n}>
        <ReactQueryProvider>
            <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
        </ReactQueryProvider>
        </I18nextProvider>
    


    )

}

export default Providers
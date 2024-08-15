// Next Imports
import { headers } from 'next/headers'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Component Imports

// HOC Imports
import TranslationWrapper from '@/hocs/TranslationWrapper'

// Config Imports
import { i18n } from '@configs/i18n'

import { ApolloWrapper } from './../ApolloWrapper'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import { Snackbar } from '@mui/material'

export const metadata = {
  title: 'Materio - Material Design Next.js Admin Template',
  description:
    'Materio - Material Design Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = ({ children, params }) => {
  // Vars
  const headersList = headers()
  const direction = i18n.langDirection[params.lang]

  return (
    <ApolloWrapper>
      <TranslationWrapper headersList={headersList} lang={params.lang}>
        <html id='__next' lang={params.lang} dir={direction}>
          <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
        </html>
      </TranslationWrapper>
    </ApolloWrapper>
  )
}

export default RootLayout

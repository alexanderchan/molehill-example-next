/// <reference types="@emotion/react/types/css-prop" />

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/css'
import { mh } from '@molehill-ui/babel-plugin/macro'
import { createCssTheme } from '@molehill-ui/theme'

const { cssVars } = createCssTheme()

function Theme({ children }) {
  return <div className={css(cssVars)}>{children}</div>
  // return <div style={{...cssVars}}>{children}</div>
}

export default function Home() {
  return (
    <Theme>
      <div className={styles.container}>
        <div
          className={css(
            mh({
              display: 'flex',

              mx: false ? '1' : 2,
              p: '3',
              px: 4,

              border: '1px solid --color-blue-100',
              // borderColor: 'blue-100',
              color: 'white',
              background: 'gray-600',
              borderRadius: 'md',
              boxShadow: 'lg',
              fontWeight: 'bold',
              '@media:sm': {
                background: 'gray-600',
              },
              md: {
                backgroundImage:
                  'linear-gradient(to right, --color-blue-400, --color-indigo-800)',
              },
              '@media:xl': {
                backgroundImage:
                  'linear-gradient(to right, --color-red-400, --color-indigo-800)',
              },
            })
          )}
        >
          This is a test
        </div>
        <div
          className={css({
            display: 'flex',
            mx: '',
          })}
          css={{
            color: 'blue-300',
            px: '1',
            md: {
              display: 'flex',
            },
          }}
        ></div>
      </div>
    </Theme>
  )
}

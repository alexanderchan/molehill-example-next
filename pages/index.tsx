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
              border: '1px solid',
              // border: '1px solid blue-500',
              p: '3',
              px: 4,
              color: 'white',
              backgroundColor: 'blue-500',
              borderRadius: 'md',
              display: 'flex',
              fontWeight: 'bold',
              mx: false ? '1' : 2,
            })
          )}
        >
          This is a test
        </div>
        <div
          className={css({
            display: 'flex',
          })}
        ></div>
      </div>
    </Theme>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/css'
import { mh } from '@molehill-ui/babel-plugin/macro'
import { createCssTheme } from '@molehill-ui/theme'

const {
  config: { cssVars },
} = createCssTheme()

function Theme({ children }) {
  return <div className={css(cssVars)}>{children}</div>
}

export default function Home() {
  const active = true
  return (
    <Theme>
      <div className={styles.container}>
        <div
          className={css(
            mh({
              border: '1px solid',
              // need to fix ternaries to know parent property name
              // mx: active ? '1' : '2',
              p: '3',
              color: 'white',
              backgroundColor: 'blue-500',
              borderRadius: 'md',
            })
          )}
        >
          test
        </div>
      </div>
    </Theme>
  )
}

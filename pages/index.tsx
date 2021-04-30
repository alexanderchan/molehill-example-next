/// <reference types="@emotion/react/types/css-prop" />
import styles from '../styles/Home.module.css'
import { css } from '@emotion/css'
import { createCssTheme } from '@molehill-ui/theme'

const { cssVars } = createCssTheme({
  config: {
    prefix: 'a',
  },
})

function Theme({ children }) {
  return <div className={css(cssVars)}>{children}</div>
}

export default function Home() {
  return (
    <Theme>
      <div className={styles.container}>
        <div
          css={{
            display: 'flex',

            mx: false ? '1' : 2,
            p: '3',
            px: 4,

            border: '1px solid --color-blue-100',
            // borderColor: 'blue-100',
            color: 'white',
            bg: 'blue-500',
            borderRadius: 'md',
            boxShadow: 'lg',
            fontWeight: 'bold',
            '@media:sm': {
              background: 'blue-500',
            },
            md: {
              backgroundImage:
                'linear-gradient(to right, --color-blue-400, --color-indigo-800)',
            },
            '@media:xl': {
              backgroundImage:
                'linear-gradient(to right, --color-red-400, --color-indigo-800)',
            },
          }}
        >
          emotion time
        </div>
        <div style={{ color: 'blue-500' }}>style only</div>
      </div>
    </Theme>
  )
}

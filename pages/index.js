import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/css'
import { mh } from '@molehill-ui/babel-plugin/macro'

export default function Home() {
  const active = true
  return (
    <div className={styles.container}>
      <div
        className={css(
          mh({
            border: '1px solid',
            borderColor: 'rebeccapurple',
            // need to fix ternaries to know parent property name
            // mx: active ? '1' : '2',
            p: '1',
            color: 'blue-100',
          })
        )}
      >
        test
      </div>
    </div>
  )
}

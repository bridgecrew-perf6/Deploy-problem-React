import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Deploy problem</title>
        <meta property="og:title" content="Deploy problem" />
      </Helmet>
      <form className={styles['form']}>
        <input
          type="text"
          placeholder="placeholder"
          className={projectStyles['input']}
        />
      </form>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['link']} ${projectStyles['button']} `}
      >
        Button
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['link1']} ${projectStyles['button']} ${projectStyles['h2']} `}
      >
        Button
      </a>
    </div>
  )
}

export default Home

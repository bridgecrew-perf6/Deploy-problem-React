import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - Deploy problem</title>
        <meta property="og:title" content="Page - Deploy problem" />
      </Helmet>
      <h1 className={` ${projectStyles['head']} ${styles['text']} `}>
        Heading
      </h1>
    </div>
  )
}

export default Page

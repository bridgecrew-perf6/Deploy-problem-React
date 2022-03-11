import React from 'react'

import styles from './component1.module.css'

const Component1 = (props) => {
  return <div className={styles['container']}>{props.children}</div>
}

export default Component1

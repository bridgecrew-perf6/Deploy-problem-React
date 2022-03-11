import React from 'react'

import PropTypes from 'prop-types'

import styles from './component2.module.css'

const Component2 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      {props.children}
    </div>
  )
}

Component2.defaultProps = {
  rootClassName: '',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component2

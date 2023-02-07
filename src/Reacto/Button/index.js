import React from 'react'
import cx from 'classnames'
import styles from './Button.module.css'

const Button = ({ isActive, setIsActive }) => (
  <button
    id="comment"
    className={cx(styles.button, isActive && styles.active)}
    onClick={() => setIsActive(!isActive)}
  >
    R
  </button>
)

export default Button

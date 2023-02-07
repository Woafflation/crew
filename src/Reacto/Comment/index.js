import React, { useEffect, useState, useRef } from 'react'
import styles from './Comment.module.css'
import { useOnClickOutside } from '../hooks/click'

// If there will be more time, I could add emoji-mart to attach emoji and refactor/divide components into View / Edit views

const Comment = ({ position, id, setElements }) => {
  const ref = useRef(null)
  const [meta, setMeta] = useState({
    createdAt: new Date().toLocaleTimeString(),
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isViewed, setIsViewed] = useState(false)
  const [value, setValue] = useState('')
  useOnClickOutside(ref, handleClickOutside)

  useEffect(() => {
    setMeta({
      createdAt: new Date().toLocaleTimeString(),
    })
  }, [])

  function handleSubmit() {
    setIsSubmitted(true)
  }

  function handleClickOutside() {
    if (!value) {
      setElements((prev) => prev.filter(({ id: elId }) => elId !== id))
    } else {
      handleSubmit()
    }
  }

  const { createdAt } = meta

  if (isViewed) {
    return (
      <div
        className={styles.wrapper}
        style={{
          top: position.y,
          left: position.x,
        }}
        onClick={() => setIsViewed(false)}
      >
        <div className={styles.meta}>
          <span>{createdAt}</span>
        </div>
        <div>{value}</div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div
        className={styles.wrapper}
        style={{
          top: position.y,
          left: position.x,
        }}
        onClick={() => setIsViewed(true)}
      >
        C - {id}
      </div>
    )
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        top: position.y,
        left: position.x,
      }}
      ref={ref}
    >
      <div className={styles.meta}>
        <span>{createdAt}</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Comment

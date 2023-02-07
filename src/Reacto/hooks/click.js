import { useEffect, useState } from 'react'
import { relativeCoords } from '../utils'

// There is also one more solution (better, but need more time), we can portal el to the root component, as well as modals do

export function useOnPageClick({ isActive, setIsActive }) {
  const [elements, setElements] = useState([])
  const activateEl = document.getElementById('comment')

  useEffect(() => {
    const listener = (event) => {
      if (!isActive || event.target === activateEl) return

      event.preventDefault()

      setIsActive(false)

      const position = relativeCoords(event)

      setElements([
        ...elements,
        {
          position,
          target: event.target,
          id: elements.length + 1,
        },
      ])
    }

    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [activateEl, elements, isActive, setIsActive])

  return {
    elements,
    setElements,
  }
}

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

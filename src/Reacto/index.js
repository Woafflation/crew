import React from 'react'
import ReactDom from 'react-dom'
import Comment from './Comment'
import { useOnPageClick } from './hooks/click'

const Reacto = ({ isActive, setIsActive }) => {
  const { elements, setElements } = useOnPageClick({ isActive, setIsActive })

  if (!elements.length) return

  return elements.map(({ target, ...rest }) =>
    ReactDom.createPortal(
      <Comment key={rest.id} {...rest} setElements={setElements} />,
      target
    )
  )
}

export default Reacto

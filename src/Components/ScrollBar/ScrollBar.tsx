import React, { useState, useCallback, useRef, useEffect } from 'react'

import { styles } from './ScrollBar.style'
const SCROLL_BOX_MIN_HEIGHT = 20
type Props = {
  children?: JSX.Element[]
}
export const ScrollBar: React.FC<Props> = ({ children }) => {
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT)
  const [scrollBoxTop, setScrollBoxTop] = useState(0)
  const [hovering, setHovering] = useState(false)
  const classes = styles()
  const scrollHostRef = useRef<HTMLDivElement>()
  useEffect(() => {
    const scrollHostElement = scrollHostRef.current
    const { clientHeight, scrollHeight } = scrollHostElement
    const scrollBoxPercentage = clientHeight / scrollHeight
    const scrollbarHeight = Math.max(
      scrollBoxPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT,
    )
    setScrollBoxHeight(scrollbarHeight)
    scrollHostElement.addEventListener('scroll', handleScroll, true)
    return function cleanup() {
      scrollHostElement.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  const scrollThumbPercentage = clientHeight / scrollHeight

  const scrollThumbHeight = Math.max(
    scrollThumbPercentage * clientHeight,
    SCROLL_BOX_MIN_HEIGHT,
  )

  setScrollBoxHeight(scrollThumbHeight)

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return
    }
    const scrollHostElement = scrollHostRef.current
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement
    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight)
    setScrollBoxTop(newTop)
  }, [])

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true)
  }, [hovering])

  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false)
  }, [hovering])

  return (
    <div
      className={classes.scrollhostContainer}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div ref={scrollHostRef}>
        {children}
        <div className={classes.scrollBar}>
          <div
            className={'scroll-thumb'}
            style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          />
        </div>
      </div>
    </div>
  )
}
export default ScrollBar

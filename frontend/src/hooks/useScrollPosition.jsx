import React from 'react'

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = React.useState(0)

  React.useEffect(() => {
    function updatePosition() {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

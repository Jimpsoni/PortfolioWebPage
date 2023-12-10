import { useEffect } from "react"
import { useLocation } from 'react-router-dom'

export const drawstars = (tagId) => {
    function random(min, max) {
      return min + Math.random() * (max + 1 - min)
    }
  
    const elem = document.getElementById(tagId)
    if (!elem) return
    const canvasSize = elem.offsetWidth * elem.offsetHeight
    const starsFraction = canvasSize / 20000
  
    for (let i = 0; i < starsFraction; i++) {
      let xPos = random(0, 100)
      let yPos = random(0, 100)
      let alpha = random(0.5, 1)
      let size = random(1, 2)
      let colour = "#E8E8E8"
  
      const star = document.createElement("div")
      star.style.position = "absolute"
      star.style.left = xPos + "%"
      star.style.top = yPos + "%"
      star.style.opacity = alpha
      star.style.width = size + "px"
      star.style.height = size + "px"
      star.style.backgroundColor = colour
      star.style.zIndex = 2
      document.getElementById(tagId).appendChild(star)
    }
}

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}
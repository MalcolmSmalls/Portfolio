import React from 'react'
import { bg1 } from '../assets/'
import useState from 'react'

export default function Header() {
  const [loopNum, setLoopNum] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [text, setText] = React.useState('')
  const [delta, setDelta] = React.useState(300 - Math.random() * 100)
  const [index, setIndex] = React.useState(1)
  const toRotate = [
    'Full Stack Software Engineer',
    'Web Developer',
    'Music Producer',
  ]
  const period = 2000

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }
  return (
    <>
      <div
        className='container h-screen w-screen bg-cover bg-left-top'
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className='flex bg-black h-screen w-screen bg-opacity-60 justify-center items-center flex-col gap-10'>
          <h1 className='text-white lg:text-9xl text-7xl sm:text-7xl font-BebasNeue'>
            Malcolm Smalls
          </h1>
          <h3 className='text-white font-BebasNeue text-5xl border'>{text}</h3>
        </div>
      </div>
    </>
  )
}

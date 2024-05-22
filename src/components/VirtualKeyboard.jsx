import React, { useEffect, useState } from 'react'
import '../css/virtualkeyboard.css'
export default function VirtualKeyboard() {
  useEffect(()=>{
    document.title="Virtual Keyboard"
  },[])


  const [text, setText] = useState('')
  const [isLowerCase, setIsLowerCase] = useState(true)
  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
    'backspace'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '/'],
    ['caps', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'],
    ['spacebar']
  ]
  const click = (e) => {
    if (isLowerCase) {
      setText(prevText => 
        prevText + e.target.value.toLowerCase())
    } else {
      setText(prevText => 
        prevText + e.target.value)
    }
  }

  const backspace = () => {
    setText(prevText => 
      prevText.substring(0, prevText.length - 1))
  }

  const capslock = () => {
    setIsLowerCase(e => !e)
  }

  const spacebar = () => {
    setText(prevText => prevText + " ")
  }
  return (
    <div>
      <h3>{text.length > 0 ? text : "type something..."}
      <span className='textCursor'>|</span></h3>
      {
        keys.map((row, i) => {
          return <div 
          className='keyboardContainer' 
          key={i}>
            {
              row.map(key => {
                if (key == "backspace") {
                  return <button
                    className='buttonStyle'
                    key={key}
                    value={key}
                    onClick={backspace}
                  >
                    <img src='./backspace.png' />
                  </button>
                } else if (key == "caps") {
                  return <button
                    className='buttonStyle'
                    key={key}
                    value={key}
                    onClick={capslock}
                  >
                    {key}
                  </button>
                } else if (key == "spacebar") {
                  return <button
                    className='buttonStyle spacebar'
                    key={key}
                    value={key}
                    onClick={spacebar}
                  >
                    {key}
                  </button>
                } else {
                  return <button
                    className='buttonStyle'
                    key={key}
                    value={key}
                    onClick={click}
                  >
                    {key}
                  </button>
                }
              })
            }
          </div>
        })
      }
    </div>
  )
}

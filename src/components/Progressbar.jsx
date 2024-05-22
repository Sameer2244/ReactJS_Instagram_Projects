import { useState } from 'react'
import { useEffect } from 'react';

function Progresbar() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const startProgress = () => {
    setStart(true)
  }

  useEffect(() => {
    if (count < 100 && start) {
      const temp = setTimeout(() => {
        setCount(count + 1)
      }, 100)
      return () => {
        clearTimeout(temp)
      }
    }
  }, [count, start])

  return (
    <div>
      <h2>Progress bar</h2>
      <div className='container'>
        <div className='progress-container'>
          <div className='progress-bar'
            style={{ width: `${count}%` }}
          ></div>
        </div>
        <p>{count}%</p>
      </div>
      <button onClick={startProgress}>
        Start progress
      </button>
    </div>
  )
}

export default Progresbar

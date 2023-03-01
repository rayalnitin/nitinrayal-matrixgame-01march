import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [active, setActive] = useState([])

  const handleClick = (e) => {

    const target = e.target.getAttribute('idx')
    if (active.indexOf(target) !== -1) {
      const arr = active.filter((n) => n !== target)
      setActive(arr)
    } else {
      if (active.length < 2) {
        let arr = [...active, target]
        setActive(arr)
      } else {
        const arr = [...active]
        const removed = arr.shift()
        setActive([...arr, target])
      }
    }
  }
  const getBgColor = (idx) => {
    if (active.indexOf(idx) === -1) {
      return 'blue'
    } else {
      return 'red'
    }
  }
  return (
    <div className='main'>
      <div className='boxes'>
        <div className='box' style={{ backgroundColor: getBgColor('1') }} onClick={(e) => handleClick(e)} idx={1}></div>
        <div className='box' style={{ backgroundColor: getBgColor('2') }} onClick={(e) => handleClick(e)} idx={2}></div>
        <div className='box' style={{ backgroundColor: getBgColor('3') }} onClick={(e) => handleClick(e)} idx={3}></div>
        <div className='box' style={{ backgroundColor: getBgColor('4') }} onClick={(e) => handleClick(e)} idx={4}></div>
        <div className='box' style={{ backgroundColor: getBgColor('5') }} onClick={(e) => handleClick(e)} idx={5}></div>
        <div className='box' style={{ backgroundColor: getBgColor('6') }} onClick={(e) => handleClick(e)} idx={6}></div>
        <div className='box' style={{ backgroundColor: getBgColor('7') }} onClick={(e) => handleClick(e)} idx={7}></div>
        <div className='box' style={{ backgroundColor: getBgColor('8') }} onClick={(e) => handleClick(e)} idx={8}></div>
        <div className='box' style={{ backgroundColor: getBgColor('9') }} onClick={(e) => handleClick(e)} idx={9}></div>
        <div className='box' style={{ backgroundColor: getBgColor('10') }} onClick={(e) => handleClick(e)} idx={10}></div>
        <div className='box' style={{ backgroundColor: getBgColor('11') }} onClick={(e) => handleClick(e)} idx={11}></div>
        <div className='box' style={{ backgroundColor: getBgColor('12') }} onClick={(e) => handleClick(e)} idx={12}></div>
        <div className='box' style={{ backgroundColor: getBgColor('13') }} onClick={(e) => handleClick(e)} idx={13}></div>
        <div className='box' style={{ backgroundColor: getBgColor('14') }} onClick={(e) => handleClick(e)} idx={14}></div>
        <div className='box' style={{ backgroundColor: getBgColor('15') }} onClick={(e) => handleClick(e)} idx={15}></div>
        <div className='box' style={{ backgroundColor: getBgColor('16') }} onClick={(e) => handleClick(e)} idx={16}></div>
      </div>
    </div>

  )
}

export default App
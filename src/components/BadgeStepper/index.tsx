import './index.scss'
import React from 'react'
// an image stepper/carousel to display certification badges on a timer
// import all the images from ../../assets/badges
import badge1 from '../../assets/badges/badge1.png'
import badge2 from '../../assets/badges/badge2.png'
import badge3 from '../../assets/badges/badge3.png'
import badge4 from '../../assets/badges/badge4.png'
import badge5 from '../../assets/badges/badge5.png'
import badge6 from '../../assets/badges/badge6.png'
import badge7 from '../../assets/badges/badge7.png'
import badge8 from '../../assets/badges/badge8.svg'
import badge9 from '../../assets/badges/badge9.svg'
import badge10 from '../../assets/badges/badge10.svg'

const badges = [badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9, badge10]


export const BadgeStepper = () => {
    const ref = React.useRef(null)
    const [index, setIndex] = React.useState(0)
    const badgeCount = 5
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1)%badgeCount)
    }
    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1)%badgeCount)
    }
    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1)%badgeCount)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

  return (
    <div className='stepper-container'>
        <div className='stepper'>
            <div className='stepper-image-container'>
                <img className='stepper-image' src={badges[index]} alt='badge'/>
            </div>
            <div className='stepper-controls'>
                <button className='stepper-button left' onClick={handlePrev}>Prev</button>
                <button className='stepper-button right' onClick={handleNext}>Next</button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { AnimatedLetters } from '../AnimatedLetters/index.tsx'

 const Home = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')
    const nameArray = ['n', 'd', 'r', 'e', 'w']
    const jobArray = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
  return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />
                I'm <span className='letter-rotate'>A</span><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                And I'm an
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}></AnimatedLetters>
                </h1>
                <h2>Devops | Cloud | Data | Eternal Student</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    </>
  )
}
export default Home

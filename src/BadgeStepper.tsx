    // a react component to create a styled image stepper with the images in .\assets\badges

    import React, { useState, useEffect } from 'react'
    // import all images from .\assets\badges
    import badge1 from '.\\assets\\badges\\badge1.png'
    import badge2 from '.\\assets\\badges\\badge2.png'
    import badge3 from '.\\assets\\badges\\badge3.png'
    import badge4 from '.\\assets\\badges\\badge4.png'
    import badge5 from '.\\assets\\badges\\badge5.png'
    import badge6 from '.\\assets\\badges\\badge6.png'


    const BadgeStepper = () => {
        const [currentBadge, setCurrentBadge] = useState(0)

        const badges = [
            badge1,
            badge2,
            badge3,
            badge4,
            badge5,
            badge6
        ]

        const nextBadge = () => {
            currentBadge === badges.length - 1 ? setCurrentBadge(0) : setCurrentBadge(currentBadge + 1)
        }

        const prevBadge = () => {
            currentBadge === 0 ? setCurrentBadge(badges.length - 1) : setCurrentBadge(currentBadge - 1)
        }

        const setbadge = (index: number) => {
            setCurrentBadge(index)
        }

        useEffect(() => {
            const interval = setInterval(() => {
                nextBadge()
            }, 3000)
            return () => clearInterval(interval)
        }, [currentBadge])

        return (
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex items-center justify-center w-full h-full'>
                    <img src={badges[currentBadge]} alt='badge' className='w-1/2 h-full' />
                </div>
                <div className='flex items-center justify-center w-full h-full'>
                    <button onClick={prevBadge} className='px-4 py-2 m-2 text-white bg-black rounded-full hover:bg-gray-700'>Prev</button>
                    {badges.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setbadge(index)}
                            className={`w-4 h-4 m-2 rounded-full cursor-pointer ${index === currentBadge ? 'bg-black' : 'bg-gray-700'}`}
                        />
                    ))}
                    <button onClick={nextBadge} className='px-4 py-2 m-2 text-white bg-black rounded-full hover:bg-gray-700'>Next</button>
                </div>
            </div>
        )
        
        
    }

    export default BadgeStepper
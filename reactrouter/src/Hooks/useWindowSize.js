import React, { useEffect, useState } from 'react'

function useWindowSize() {

    // const [isAdult, setIsAdult] = useState(false);
    // useEffect(() => {
    //     if (age >= 18) setIsAdult(true)
    //     else setIsAdult(false)
    // }, [age])

    const [dimensions, setDimension] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            console.log('R');
            setDimension(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])


    return { dimensions }
}

export default useWindowSize
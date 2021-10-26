import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Content = () => {

    let contenth1 = useRef(null)

    useEffect(() => {
        gsap.to(contenth1, {
            duration: 1, // 1秒間
            x: 1,
            opacity: 1,
            ease: 'power2.easeOut',
            stagger: {
            from: 'start', // 左側から
            amount: 0.5, // 0.5秒おきに
        }
        })
    })

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="container">
                    <h1 className="no-overlay" ref={el => (contenth1 = el)}>Avenir esthétique</h1>
                    <div className="overlay"><h1>Avenir esthétique</h1></div>
                    <p>New Arrivals!</p>
                </div>
            </div>
        </div>

    )
}

export default Content

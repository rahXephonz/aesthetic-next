import React, { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"

export const Menu = ({ state }) => {
    // variable untuk animasi dom node
    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)

    useEffect(() => {
        if(state.clicked === false){
            // close menu
            gsap.to([revealMenu, revealMenuBackground],{
                duration: 0.8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.07
                }
            })

            gsap.to(menu, {
                duration: 1,
                css: { display: "none"}
            })
        }
        else if(state.clicked === true || state.clicked === true && state.initial === null ){
            // open menu
            gsap.to(menu, {
                duration: 0,
                css: { display: "block"}
            })
            gsap.to([revealMenuBackground, revealMenu],{
                duration: 0,
                opacity: 1,
                height: "100%",
            })

            staggerReveal(revealMenuBackground, revealMenu)
            staggerText(line1, line2, line3)
        }

    },[state])

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        })
    }

    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: 0.8,
            y: 100,
            delay: 0.2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3
            }
        })
    }

    const handleHover = e => {
        gsap.to(e.target, {
            duration: 0.3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut"
        })
    }

    const handleOverExit = e => {
        gsap.to(e.target, {
            duration: 0.3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut"
        })
    }

    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li ref={el => (line1 = el)} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleOverExit(e)}><Link href="/"><a className="hover">Our Style</a></Link></li>
                                    <li ref={el => (line2 = el)} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleOverExit(e)}><Link href="/"><a className="hover">Who We Are</a></Link></li>
                                    <li ref={el => (line3 = el)} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleOverExit(e)}><Link href="/"><a className="hover">Contact Us</a></Link></li>
                                </ul>

                                <ul className="overlay-1">
                                    <li ref={el => (line1 = el)}><a>Our Style</a></li>
                                    <li ref={el => (line2 = el)}><a>Who We Are</a></li>
                                    <li ref={el => (line3 = el)}><a>Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu

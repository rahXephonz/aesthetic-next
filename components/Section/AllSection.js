import React from 'react'
import Image from 'next/image'
import Heros1 from '../Images/aesthethic_art2.png'
import Heros2 from '../Images/aesthethic_art3.png'
import { MdOutlineArrowRightAlt } from "react-icons/md"

const AllSection = () => {
    return (
        <div className="section-hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner">
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Meet our an</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Favourite artist</div>
                                </div>

                                <p>Make your  style look elegant and you can choose them for your walpapper Keep it all for aesthetic!</p>
                                <div className="button-row">
                                    <button className="explore-button">
                                        Explore now.
                                        <div className="arrow-icon">
                                            <MdOutlineArrowRightAlt />
                                        </div>
                                    </button>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner">
                            <div className="hero-image hero1">
                                <Image src={Heros1} alt="heros1" />
                            </div>

                            <div className="hero-image hero2">
                                <Image src={Heros2} alt="heros2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSection

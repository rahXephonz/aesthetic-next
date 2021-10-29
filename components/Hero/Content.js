import React from "react"
import Image from "next/image"
import Heros from "../Images/heros.png"

const Content = () => {

    

    return (
    <>
        <div className="content-wrapper">
            <div className="content">
                <div className="container">
                    <h1 className="no-overlay">Avenir esthétique</h1>
                    <div className="overlay"><h1>Avenir esthétique</h1></div>
                    <p>New Arrivals!</p>
                </div>
            </div>
            <div className="Image-wrapper"><Image src={Heros} alt="heros"/></div>
        </div>
    </>
    )
}

export default Content

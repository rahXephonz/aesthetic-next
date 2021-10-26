import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import Logo from "../Images/logo.png"
import Menu from "./Menu";

const Header = () => {

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    })
    

    const [disabled, setDisabled] = useState(false)
    const [isClass, setClass] = useState(false)



    const handleMenu = () => {
        disableMenu();

        setClass(!isClass)

        if(state.initial === false){
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
        }
        else if(state.clicked === true){
            setState({ 
                clicked : !state.clicked,
                menuName: "Menu"
            })
        }
        else if(state.clicked === false){
            setState({ 
                clicked : !state.clicked,
                menuName: "Close"
            })
        }
    }

    // Determine hamburger menu harus disable

    const disableMenu = () => {
        setDisabled(!disabled)

        setTimeout(() => {
            setDisabled(false);
        }, 1300)
    }

    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link href="/"><a><Image src={Logo} alt="logo"/></a></Link>
                        </div>
                        <button className={isClass ? "hamburger is-active" : "hamburger"} onClick={handleMenu} disabled={disabled} id="hamburger-1">
                            <span className="line" />
                            <span className="line" />
                            <span className="line" />
                        </button>
                    </div>
                </div>
            </div>
            <Menu state={state}/>
        </header>
    )
}

export default Header
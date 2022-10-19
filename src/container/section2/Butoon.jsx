import React from 'react'
import consoleimg from "../images/console.svg"
import buttonstyle from "./buttonstyle.css"
export const Butoon = () => {
    return (
        <section className="section2">
            
            <div className="but-item">
                <img src={consoleimg} alt="But-Img" />
                <p>Music</p>
            </div><div className="but-item">
                <img src={consoleimg} alt="But-Img" />
                <p>Console</p>
            </div><div className="but-item">
                <img src={consoleimg} alt="But-Img" />
                <p>Laptop</p>
            </div><div className="but-item">
                <img src={consoleimg} alt="But-Img" />
                <p>Gaming</p>
            </div><div className="but-item">
                <img src={consoleimg} alt="But-Img" />
                <p>Cameras</p>
            </div><div className="but-item">
                <img src={consoleimg} alt="But-Img" />
                <p>Setup</p>
            </div>
        </section>
    )
}

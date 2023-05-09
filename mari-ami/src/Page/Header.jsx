import "./header.css"
import Image from "../image/Mask Group.png"


function Header (){
    return (

        <header>
            <div className="flex">
            <div>
            <button>Get in Touch</button>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Solutions</li>
                <li>Cases</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            
        </div>
        <div>
            <img src={Image} alt="logo"/>
        </div>
        
        
        </div>
        </header>
    )
}

export default Header;
import "./header.css"
import Image from "../image/Mask Group.png"


function Header (){
    function pressOnButton(){
console.log(123);
    }
    return (

        <header>
            <div className="flex">
            <div className="div-item">
            <button onClick={pressOnButton}>Get in Touch</button>
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
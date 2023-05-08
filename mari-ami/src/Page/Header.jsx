import "./header.css"
import Image from "../image/Mask Group.png"


function Header (){
    return (

        <header>
            <div className="flex">
            <div>
            <button>get in tuch</button>
        </div>
        <div>
            <ul>
                <li>home</li>
                <li>solution</li>
                <li>casec</li>
                <li>about as</li>
                <li>blog</li>
                <li>contact as</li>
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
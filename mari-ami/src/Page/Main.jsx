import "./main.css";
import Images from '../image/back.png';




function Main (){
    function pressOnButton(){

    }
    return (
        <div className="full">
<div className="left">
        <div>
            <h1 className="TheFirm">
            Get Bussiness Solutions with TheFirm.
            </h1>
        </div>
        <div>
            <p className="Lorem">
            Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy</p>
        </div>
        <div className="Get">
            <button onClick={pressOnButton}>Get in Touch</button>
        </div>
        </div>
        <div className="pic">
            <img className="picture" src={Images}alt="loading"/>

        </div>
     </div>  
          
            
        
            
            
    )
}

export default Main;






import "./mainpages.css";
import Pict from '../image/Group 6.png';


function Mainpages(){
    return(
    <div className="News">
    <div className="Right">
        <div>
            <h1 className="Clients">Frustration of Clients</h1>
        </div>
        <div>
            <p className="Ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div>
            <ul className="List">
                <li>Loren rasion gravida auem is bibenua tase</li>
                <li>Lorem Ipsum is simply dummy text of the.</li>
                <li>Printing and typesetting industry. Lorem Ipsum</li>
                <li>When an unknown printer took a galley of type and scrambled it</li>
               
            </ul>
            <div>
                <img className="Gap" src={Pict} alt="loading"/>
            </div>
        </div>




    </div>

   
   
   
   
   
   
   
    </div>
    )
}



export default Mainpages;
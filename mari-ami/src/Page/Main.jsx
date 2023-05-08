import "./main.css";
import Photo from '../image/back.png';


function Main (){
    return (

        <div class="container">
            <div class="text">
                <h1>Get Bussiness <br>Solutions with TheFirm.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy.</p>
            </div>
            <div class ="pic">
            <img src={Photo} alt="loading"/>
            </div>
            
        </div>
    )
}

export default Main;
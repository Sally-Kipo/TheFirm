import "./footer.css";
import Docimg from '../image/first.png';
import Docuimg from '../image/second.png';
import Documimg from '../image/third.png';
import Documeimg from '../image/four.png';
import Documenimg from '../image/five.png';


function Footer(){
    return(
        <div className="end">
            <div className="last">
                <div >
                    <h1 className="our">Our Testimonials</h1>
                </div>
                <div>
                   <p className="printing">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,</p> 

                   </div>
                   <div>
                    <h5 className="Jenny">Jenny Wilson | Digital Agency</h5>
                   </div>
                   

            </div>
            <div className="Icon">
                    <img className="first" src={Docimg} alt="loadin"/>
                    <img className="second" src= {Docuimg} alt="loadin"/>
                    <img className="third" src= {Documimg} alt="loadin"/>
                    <img className="four" src= {Documeimg} alt="loadin"/>
                    <img className="five" src= {Documenimg} alt="loadin"/>
                   </div>

        </div>
    )
}











export default Footer;
import Image from "../../src/anisia/office.png"
import "./main.css"
        function Main (){
            return (
                <div className="bgcolor">
                     
                    <div className=" case">
                    <h1>Our Research & Case Studies</h1>
                    </div>
                    <div className="lorem">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                    </div> 
                  <div className="side">
                   <div className="down">
                    <div className="simply" >
                       <h2>Lorem Ipsum is simply</h2>
                    </div>
                    <div className="dummy">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </p>
                    </div>
                    <div className="btn">
                        <button>read more</button>
                    </div>
                   </div>             
                   <div className="wt">         
                              <img className="office" src={Image} alt="" />                            
                        </div>               
                        </div>
                     <div>
                        <h3 className="blogs">
                            Our Blogs
                        </h3>
                     </div>
                  </div>           
            )
        }
export default Main;
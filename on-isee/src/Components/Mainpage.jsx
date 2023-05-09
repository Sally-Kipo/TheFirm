import First from "../../src/anisia/first.png";
import "./mainpage.css";
import Second from "../../src/anisia/second.png";
import Third from "../../src/anisia/third.png";
import Alex from "../../src/anisia/Alex.png";
import Fra from "../../src/anisia/fra.png"
import Sca from "../../src/anisia/sca.png"
const blogitems = [
    {
      id: 1,
      title: "Lorem Ipsum is",
      image: First,
      icon: Alex,
    },
    {
      id: 2,
      title: "Lorem Ipsum is",
      image: Second,
      icon: Fra,
    },
    {
      id: 3,
      title: "Lorem Ipsum is",
      image : Third,
      icon: Sca,  
    },
  ];
  
  function Blogitem(props) {
    return (
      <div className="whitebox">
            <div>
        <img src={props.image}  />

          </div>
          <div className="style">
        <h1> {props.title}</h1>
        <p>{props.description}</p>
        </div>
        <div className="line"></div>
        <div className="icon">
        <img src={props.icon}  />
        </div>
        <div>
          <div className="Alexliones">
           <p>Alex Liones</p>
             </div>                           
             </div>
           <div className="time">
                <p>28,Aug 2020, 09:48:00</p>
                </div>
                <div className="btt">
                <button>Read More</button>
              </div>
             </div>                                      
    );
  }
  
  function Mainpage() {
    return (
      <div className="container">
        {blogitems.map((item) => (
          <Blogitem
      image={item.image} 
      icon={item.icon}
            title={item.title}
            description="Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen."
          />
        ))}
      </div>
    );
  }
  
  export default Mainpage;
  

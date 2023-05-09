import React from 'react';
import './main.css';
import image1 from '../../src/images/image1.jpg';
import image2 from '../../src/images/image2.jpg';
import image3 from '../../src/images/image3.jpg';

function DivItem(props) {
  return (
    <div className="div-item">
      <h1>{props.title}</h1>
    </div>
  );
}

function DivContainer() {
  return (
    <div className="div-container">
      <DivItem title="Market Research" />
      <DivItem title="Branding" />
      <DivItem title="Reporting" />
      <DivItem title="Data Analysis" />
    </div>
  );
}

function Main() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="my-rectangle" style={{ top: "100px", left: "83px" }}>
          <h1>Coaching</h1>
          <img src={image1} alt="image1" />
          <p>Loren rasion gravida auem is bibenua tase </p>
        </div>
        <div className="my-rectangle" style={{ top: "193px", left: "451px" }}>
          <h1>Digital Partner</h1>
          <img src={image2} alt="image2" />
          <p>Loren rasion gravida auem is bibenua tase</p>
        </div>
        <div className="my-rectangle" style={{ top: "500px", left: "122px" }}>
          <h1>SEO</h1>
          <img src={image3} alt="image3" />
          <p>Loren rasion gravida auem is bibenua tase</p>
        </div>

        <div className="right-side">
          <h1>Perfect Solution for Your Bussiness </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,.
          </p>
        </div>
      </div>

      <div className="background">
        <div className="bottom-side">
          <h1>Reason to Choose Us </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,.
          </p>
        </div>
      </div>

      <DivContainer />
    </div>
  );
}

export default Main;

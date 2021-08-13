import React from "react";
import "./circles.css";
import Circle_cards from "./circle_cards";


const Circles = () => {
  return (
    <>
      <div className="circle">
        <div className="learnwithus" id=" circle1">
         <br/> Learn with us.
        </div>
        <div className="improvewithus" id="circle2">
          Improve with us.
        </div>
        <div className ="box-main">
        <Circle_cards className =" " number ="4+" text ="COUNTRIES"  />
        <Circle_cards className =" " number ="75+" text ="MEMBERS"  />
        <Circle_cards className =" " number ="45+" text ="FREE COURSES"  />
        <Circle_cards className =" " number ="130+" text ="BLOGS"  />
        </div>
        <button type = "button" className="btn-circle">
          Explore Our Courses
        </button>
  
      </div>
    </>
  );
};

export default Circles;

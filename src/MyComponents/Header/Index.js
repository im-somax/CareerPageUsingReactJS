import React, { Component } from 'react'
import "./style.css"
// const link="./../../Data/logo1.png";
class Header extends Component {
    render() {
        return (
            <>
                <div className="mainRow">
                    <div className="logoImage" />
                    <ul className="listlinks">
                        <a href="#"><li className="linknames"> Home</li></a>
                        <a href="#"><li className="linknames"> Learners</li></a>
                        <a href="#"><li className="linknames"> CircleSpace</li></a>
                        <a href="#"><li className="linknames"> Blogs</li></a>
                        <a href="#"><li className="linknames"> About Us</li></a>
                        <a href="#"><li className="linknames"> Careers</li></a>
                        <a href="#"><li className="linknames"> .com.au</li></a>
                    </ul>
                </div>
            </>
        )
    }
}
export default Header

